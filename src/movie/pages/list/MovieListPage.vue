<template lang="">
    <v-container>
        <h2>Movie List</h2>
        <div style="text-align: left; margin: 15px;">
            <router-link :to="{ name: 'MovieRegisterPage' }">
                영화 등록
            </router-link>
        </div>
        <v-row v-if="movieList.length > 0">
            <v-col v-for="(movie, index) in movieList" :key=index cols="12" sm="6" md="4" lg="3">
                <v-card @click="goToMovieReadPage(movie.movieId)">
                    <v-img :src="getImageUrl(movie.movieImage)" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"/>
                            </v-row>
                        </template>
                    </v-img>
                    <v-card-title>{{ movie.movieName }}</v-card-title>
                    <v-card-subtitle>{{ movie.moviePrice }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <!-- Bootstrap 등에서 기본적으로 화면을 12개의 열로 구성함(전체 쓰겠단 소리) -->
            <v-col cols="12" class="text-center">
                <v-alert type="info">등록된 영화가 없습니다!</v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-img src="@/assets/images/fixed/mario.jpg" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"/>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

// npm install axios --legacy-peer-deps

<script>
// 이것은 vuex 때문에 사용 가능
import { mapActions, mapState } from 'vuex'

const movieModule = 'movieModule'

export default {
    components: {
        // RouterLink
    },
    computed: {
        ...mapState(movieModule, ['movieList']),
        pagedItems () {
            const startIdx = (this.pagination.page - 1) * this.perPage
            const endIdx = startIdx + this.perPage
            return this.movieList.slice(startIdx, endIdx)
        }
    },
    mounted () {
        this.requestMovieListToDjango()
    },
    methods: {
        ...mapActions(movieModule, ['requestMovieListToDjango']),
        getImageUrl (imageName) {
            return require('@/assets/images/uploadImages/' + imageName)
        },
        goToMovieReadPage (movieId) {
            this.$router.push({
                name: 'MovieReadPage',
                params: { movieId: movieId }
            })
        }
    },
    data () {
        return {
            headerTitle: [
                {
                    title: 'No',
                    align: 'start',
                    sortable: true,
                    key: 'movieId',
                },
                { title: '영화 이름', align: 'end', key: 'movieName' },
                { title: '영화 가격', align: 'end', key: 'moviePrice' },
            ],
            perPage: 5,
            pagination: {
                page: 1,
            }
        }
    }
}
</script>