<template>
    <v-container>
        <v-row>
            <v-col>
                <h1>k-means 그래서 이거 왜 했음?</h1>
                <div ref="chart" :style="{ width: '100%', height: '500px' }"></div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import * as d3 from 'd3';
import axios from 'axios';
export default {
    name: 'ClusterVisualization',
    data() {
        return {
            centers: [],
            labels: [],
            points: [],
            cluster_names: ["VIP 고객", "최근 구매했지만 돈은 안되는 고객", "떠나버린 VIP 고객", "떠낫지만 뼈 아프지 않은 고객"]
        };
    },
    async mounted() {
        try {
            const response = await axios.get('http://192.168.0.42:33333/kmeans-test');
            this.centers = response.data.centers;
            this.labels = response.data.labels;
            this.points = response.data.points;
            this.createChart();
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    },
    methods: {
        createChart() {
            const svg = d3.select(this.$refs.chart)
                .append('svg')
                .attr('width', '100%')
                .attr('height', '500px')
                .attr('viewBox', '0 0 800 500')
                .append('g')
                .attr('transform', 'translate(50,50)');
            const width = 700;
            const height = 400;
            const xScale = d3.scaleLinear()
                .domain(d3.extent(this.points, d => d[0]))
                .range([0, width]);
            const yScale = d3.scaleLinear()
                .domain(d3.extent(this.points, d => d[1]))
                .range([height, 0]);
            const color = d3.scaleOrdinal(d3.schemeCategory10);
            svg.selectAll('circle')
                .data(this.points)
                .enter()
                .append('circle')
                .attr('cx', d => xScale(d[0]))
                .attr('cy', d => yScale(d[1]))
                .attr('r', 5)
                .attr('fill', (d, i) => color(this.labels[i]));
            svg.selectAll('rect')
                .data(this.centers)
                .enter()
                .append('rect')
                .attr('x', d => xScale(d[0]) - 10)
                .attr('y', d => yScale(d[1]) - 10)
                .attr('width', 20)
                .attr('height', 20)
                .attr('fill', (d, i) => color(i)) // 각 클러스터링 그룹에 색상을 할당
                .append('title')
                .text((d, i) => `Cluster ${i + 1}`);
                
            // 범례 추가
            const legend = svg.selectAll('.legend')
                .data(this.cluster_names)
                .enter()
                .append('g')
                .attr('class', 'legend')
                .attr('transform', (d, i) => `translate(0, ${i * 20})`);
            legend.append('rect')
                .attr('x', width - 18)
                .attr('width', 18)
                .attr('height', 18)
                .style('fill', (d, i) => color(i)); // 색상은 클러스터 번호(i) 대신 이름에 맞게 설정
            legend.append('text')
                .attr('x', width - 24)
                .attr('y', 9)
                .attr('dy', '.35em')
                .style('text-anchor', 'end')
                .text(d => d); // 클러스터 이름 표시
        }
    }
};
</script>

<style scoped>
</style>