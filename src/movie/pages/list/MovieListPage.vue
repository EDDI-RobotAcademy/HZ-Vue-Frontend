<template>
    <div class="wrapper">
        <div class="primary-movie-box">
            <img
                :src="require('@/assets/images/uploadImages/7광구.jpg')"
                width="100%"
                height="100%"
            />
            <div class="primary-movie-text">
                <p>매주 수요일 새로운 영화 공개</p>
                <p>한국 최고의 명작 !</p>
                <p>둘이 보다 너무 재밌어서</p>
                <p>하나가 죽을일이 없는</p>
                <p>그런 영화</p>
                <div>
                    <v-btn prepend-icon="mdi-play">재생</v-btn>
                    <v-btn prepend-icon="mdi-information">상세 정보</v-btn>
                </div>
            </div>
        </div>

        <div
            class="movie-list-box"
            v-for="(category, index) in getMovieCategories"
            :key="index"
        >
            <p class="movie-type-text">{{ category.title }}</p>
            <swiper
                :slidesPerView="5"
                :spaceBetween="10"
                :navigation="true"
                :modules="modules"
                :slidesPerGroup="5"
                :noSwiping="true"
                :noSwipingClass="'no-swipe'"
                class="mySwiper no-swipe"
                style="height: calc(100% - 68px)"
            >
                <swiper-slide v-for="(movie, i) in category.movies" :key="i">
                    <img
                        :src="getImageUrl(movie.movieImage)"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="clickingImg(movie)"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>

    <movie-read-page
        :movie="movieInfo"
        v-model="dialog"
        @close="dialog = false"
    ></movie-read-page>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import MovieReadPage from "../read/MovieReadPage.vue";

const movieModule = "movieModule";

export default {
    components: {
        Swiper,
        SwiperSlide,
        MovieReadPage,
    },

    setup() {
        return {
            modules: [Navigation],
        };
    },

    data() {
        return {
            dialog: false,
            movieInfo: "",
        };
    },

    computed: {
        ...mapState(movieModule, ["movieList"]),
        getMovieCategories() {
            return [
                {
                    title: "애니메이션 영화",
                    movies: this.filteredAnimationMovie,
                },
                { title: "공포 영화", movies: this.filteredHorrorMovie },
                { title: "판타지 영화", movies: this.filteredFantasyMovie },
                { title: "뮤지컬 영화", movies: this.filteredMusicalMovie },
            ];
        },

        filteredAnimationMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "애니메이션"
            );
        },

        filteredHorrorMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "공포"
            );
        },

        filteredFantasyMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "판타지"
            );
        },

        filteredMusicalMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "뮤지컬"
            );
        },
    },

    mounted() {
        this.requestMovieListToDjango();
    },

    methods: {
        ...mapActions(movieModule, ["requestMovieListToDjango"]),

        getImageUrl(imageName) {
            return require(`@/assets/images/uploadImages/${imageName}`);
        },

        clickingImg(movie) {
            this.dialog = true;
            this.movieInfo = movie;
        },
    },
};
</script>

<style scoped>
.wrapper {
    background-color: #151515;
}

.primary-movie-box {
    position: relative;
    width: 100%;
    height: 36.25vw;
}

.primary-movie-box img {
    position: relative;
    z-index: 0;
}

.primary-movie-text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding-top: 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    background: rgba(0, 0, 0, 0.4);
    font-size: 20px;
    text-align: center;
    padding-left: 20px;
}

.primary-movie-text > div {
    margin-top: 10px;
}

.primary-movie-text > div > .v-btn:first-child {
    color: #000;
    background-color: #fff;
}

.primary-movie-text > div > .v-btn:nth-child(2) {
    margin-left: 10px;
    color: #fff;
    background-color: gray;
}

.movie-list-box {
    height: 40vh;
    padding: 16px;
}

.movie-img {
    object-fit: fill;
    cursor: pointer;
}

.movie-type-text {
    margin-bottom: 20px;
    font-size: 24px;
    color: #fff;
}
</style>
