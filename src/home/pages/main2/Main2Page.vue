<template>
    <div class="wrapper">
        <div>
            <p>요즘 뜨는 모든 컨텐츠</p>
            <br />
            <p>tvN•JTBC•Mnet 프로그램, 영화</p>
            <br />
            <p>해외 시리즈, 애니메이션, 스포츠</p>
        </div>

        <div>
            <swiper
                :slidesPerView="4.3"
                :spaceBetween="30"
                :freeMode="true"
                :loop="true"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                }"
                :pagination="{
                    clickable: false,
                }"
                :speed="1500"
                :modules="modules"
                :noSwiping="true"
                :noSwipingClass="'no-swipe'"
                class="mySwiper no-swipe"
                style="height: 90%"
            >
                <swiper-slide v-for="(item, i) in items" :key="i">
                    <img :src="item.src" width="100%" height="100%" />
                </swiper-slide>
            </swiper>
        </div>

        <div>
            <swiper
                :slidesPerView="4.3"
                :spaceBetween="30"
                :freeMode="true"
                :loop="true"
                :autoplay="{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                    stopOnLastSlide: false,
                }"
                :pagination="{
                    clickable: false,
                }"
                :speed="1200"
                :modules="modules"
                :noSwiping="true"
                :noSwipingClass="'no-swipe'"
                class="mySwiper no-swipe"
                style="height: 90%"
            >
                <swiper-slide v-for="(item, i) in items2" :key="i">
                    <img :src="item.src" width="100%" height="100%" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        return {
            modules: [Autoplay, FreeMode],
        };
    },

    data: () => ({
        items: [
            { src: require("@/assets/images/fixed/movie01.png") },
            { src: require("@/assets/images/fixed/movie02.png") },
            { src: require("@/assets/images/fixed/movie03.png") },
            { src: require("@/assets/images/fixed/movie04.png") },
            { src: require("@/assets/images/fixed/movie05.png") },
            { src: require("@/assets/images/fixed/movie06.png") },
            { src: require("@/assets/images/fixed/movie07.png") },
            { src: require("@/assets/images/fixed/movie08.png") },
        ],
        items2: [
            { src: require("@/assets/images/fixed/movie09.png") },
            { src: require("@/assets/images/fixed/movie10.png") },
            { src: require("@/assets/images/fixed/movie11.png") },
            { src: require("@/assets/images/fixed/movie12.png") },
            { src: require("@/assets/images/fixed/movie13.png") },
            { src: require("@/assets/images/fixed/movie14.png") },
            { src: require("@/assets/images/fixed/movie15.png") },
            { src: require("@/assets/images/fixed/movie16.png") },
        ],
    }),
};
</script>

<style scoped>
.wrapper {
    height: calc(100vh - 64px);
    background-color: #151515;
}

.wrapper > div:first-child {
    height: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.wrapper > div:first-child > p:first-child {
    font-size: 36px;
    font-weight: bold;
    color: #fff;
}

.wrapper > div:first-child > p:nth-of-type(2),
.wrapper > div:first-child > p:nth-of-type(3) {
    font-size: 24px;
    color: #fff;
}

.wrapper > div:nth-child(2),
.wrapper > div:nth-child(3) {
    height: 30%;
    display: flex;
    align-items: center;
}

.wrapper > div:last-child {
    height: 30%;
}

:deep(.swiper-free-mode > .swiper-wrapper) {
    transition-timing-function: linear !important;
}
</style>
