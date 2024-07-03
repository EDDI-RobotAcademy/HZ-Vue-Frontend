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
                <swiper-slide v-for="(movie, i) in movieList" :key="i">
                    <img
                        :src="getImageUrl(movie.movieImage)"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="goToMovieReadPage(movie.movieId)"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">액션 영화</p>
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
                <swiper-slide
                    v-for="(movie, i) in filteredActionMovie"
                    :key="i"
                >
                    <img
                        :src="getImageUrl(movie.movieImage)"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="goToMovieReadPage(movie.movieId)"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">판타지 영화</p>
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
                <swiper-slide
                    v-for="(movie, i) in filteredFantasyMovie"
                    :key="i"
                >
                    <img
                        :src="getImageUrl(movie.movieImage)"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="goToMovieReadPage(movie.movieId)"
                    />
                </swiper-slide>
            </swiper>
        </div>

        <div class="movie-list-box">
            <p class="movie-type-text">SF 영화</p>
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
                <swiper-slide v-for="(movie, i) in filteredSFMovie" :key="i">
                    <img
                        :src="getImageUrl(movie.movieImage)"
                        width="100%"
                        height="100%"
                        class="movie-img"
                        @click="goToMovieReadPage(movie.movieId)"
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

        filteredActionMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "액션"
            );
        },

        filteredFantasyMovie() {
            return this.movieList.filter(
                (movie) => movie.movieGenre === "판타지"
            );
        },

        filteredSFMovie() {
            return this.movieList.filter((movie) => movie.movieGenre === "SF");
        },
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
