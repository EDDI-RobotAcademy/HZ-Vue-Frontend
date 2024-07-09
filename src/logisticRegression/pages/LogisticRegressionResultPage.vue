<template>
    <v-container class="chart-container">
        <h2>Logistic Regression Chart</h2>
        <p>Accuracy: {{ accuracy.toFixed(2) }}</p>
        <div ref="chartContainer" class="chart-wrapper">
            <svg ref="svg"></svg>
        </div>
    </v-container>
</template>

<script>
import axios from 'axios';  // axios를 import
import * as d3 from 'd3';

export default {
    data () {
        return {
            accuracy: 0,
            X: [],
            y: [],
            x_values: [],
            y_values: [],
            svgWidth: 0,
            svgHeight: 0,
            margin: { top: 20, right: 50, bottom: 50, left: 50 },
            resizeTimer: null,
        }
    },
    mounted () {
        this.fetchLogisticRegressionData();
        window.addEventListener('resize', this.handleResize);
    },
    beforeUnmount () {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        async fetchLogisticRegressionData () {
            try {
                const response = await axios.get('http://192.168.0.55:33333/logistic-regression');  // 데이터 엔드포인트에 맞게 URL 수정
                const data = response.data;
                console.log('result:', data);

                this.accuracy = data.accuracy;
                this.X = data.data_point.X;
                this.y = data.data_point.y;
                this.x_values = data.decision_boundary.x_values;
                this.y_values = data.decision_boundary.y_values;

                this.createChart();
            } catch (error) {
                console.error('로지스틱 회귀 분석 중 에러 발생:', error);
            }
        },
        createChart () {
            if (!this.X.length || !this.y.length || !this.x_values.length || !this.y_values.length) {
                console.warn('데이터가 제대로 처리되지 않았습니다!');
                return;
            }

            // SVG 요소 초기화
            const svg = d3.select(this.$refs.svg);
            svg.selectAll("*").remove();

            // SVG 컨테이너 크기 설정
            const chartContainer = this.$refs.chartContainer;
            this.svgWidth = chartContainer.clientWidth;
            this.svgHeight = chartContainer.clientHeight;

            // SVG 요소 크기 지정
            svg.attr('width', this.svgWidth)
                .attr('height', this.svgHeight);

            // 마진 적용 및 그룹 요소 추가
            const g = svg.append('g')
                        .attr('transform', `translate(${this.margin.left},${this.margin.top})`);

            // X, Y 축 스케일 설정
            const x = d3.scaleLinear()
                        .domain(d3.extent(this.X, d => d[0]))
                        .range([0, this.svgWidth - this.margin.left - this.margin.right]);

            const y = d3.scaleLinear()
                        .domain(d3.extent(this.y, d => d[1]))
                        .range([this.svgHeight - this.margin.top - this.margin.bottom, 0]);

            // X 축 그리기
            g.append('g')
                .attr('transform', `translate(0, ${this.svgHeight - this.margin.top - this.margin.bottom})`)
                .call(d3.axisBottom(x));

            // Y 축 그리기
            g.append('g')
                .call(d3.axisLeft(y));

            // 데이터 포인트 그리기
            g.selectAll('circle')
                .data(this.X)
                .enter()
                .append('circle')
                .attr('cx', d => x(d[0]))
                .attr('cy', d => y(d[1]))
                .attr('r', 5)
                .style('fill', (d, i) => this.y[i] === 1 ? 'green' : 'blue');

            // 결정 경계 그리기
            const line = d3.line()
                .x(d => x(d[0]))
                .y(d => y(d[1]));

            const decisionBoundary = this.x_values.map((x_value, i) => [x_value, this.y_values[i]]);
            g.append('path')
                .datum(decisionBoundary)
                .attr('d', line)
                .attr('stroke', 'red')
                .attr('stroke-width', 2)
                .attr('fill', 'none');
        },
        handleResize () {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = setTimeout(() => {
                const chartContainer = this.$refs.chartContainer;
                this.svgWidth = chartContainer.clientWidth;
                this.svgHeight = chartContainer.clientHeight;

                d3.select(this.$refs.svg)
                    .attr('width', this.svgWidth)
                    .attr('height', this.svgHeight);

                this.createChart();
            }, 200);
        }
    }
}
</script>

<style scoped>
.chart-container {
    width: 80%;
    height: 60%;
    margin: auto;
}

.chart-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
}
</style>
