<template>
    <div class="wrapper">
        <div class="movie-list-box">
            <p class="movie-type-text">오늘 대한민국의 TOP 10 영화</p>
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
                <swiper-slide v-for="(movie, i) in items" :key="i">
                    <img
                        :src="movie.src"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="goToMovieReadPage(movie.movieId)"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">범죄 영화</p>
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
                <swiper-slide v-for="(movie, i) in items" :key="i">
                    <img
                        :src="movie.src"
                        width="100%"
                        height="100%"
                        class="movie-img"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">역사 영화</p>
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
                <swiper-slide v-for="(movie, i) in items" :key="i">
                    <img
                        :src="movie.src"
                        width="100%"
                        height="100%"
                        class="movie-img"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">호러 영화</p>
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
                <swiper-slide v-for="(movie, i) in items" :key="i">
                    <img
                        :src="movie.src"
                        width="100%"
                        height="100%"
                        class="movie-img"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
// 이것은 vuex 때문에 사용 가능
import { mapActions, mapState } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const movieModule = "movieModule";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Navigation],
        };
    },

    data() {
        return {
            items: [
                { src: require("@/assets/images/fixed/movie01.png") },
                { src: require("@/assets/images/fixed/movie02.png") },
                { src: require("@/assets/images/fixed/movie03.png") },
                { src: require("@/assets/images/fixed/movie04.png") },
                { src: require("@/assets/images/fixed/movie05.png") },
                { src: require("@/assets/images/fixed/movie06.png") },
                { src: require("@/assets/images/fixed/movie07.png") },
                { src: require("@/assets/images/fixed/movie08.png") },
                { src: require("@/assets/images/fixed/movie09.png") },
                { src: require("@/assets/images/fixed/movie10.png") },
            ],
        };
    },

    computed: {
        ...mapState(movieModule, ["movieList"]),
    },

    mounted() {
        this.requestMovieListToDjango();
    },

    methods: {
        ...mapActions(movieModule, ["requestMovieListToDjango"]),

        getImageUrl(imageName) {
            return require("@/assets/images/uploadImages/" + imageName);
        },

        goToMovieReadPage(movieId) {
            this.$router.push({
                name: "MovieReadPage",
                params: { movieId: movieId },
            });
        },
    },
};
</script>

<style scoped>
.wrapper {
    height: calc(100vh - 64px);
    background-color: #151515;
}

.movie-list-box {
    height: 25%;
    padding: 16px;
}

.movie-img {
    cursor: pointer;
}

.movie-type-text {
    margin-bottom: 20px;
    font-size: 24px;
    color: #fff;
}
</style>
