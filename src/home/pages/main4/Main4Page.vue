<template>
    <div class="wrapper">
        <div>
            <p>믿고 보는 웨이팅 에디터 추천작</p>
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
                <swiper-slide v-for="(item, i) in items" :key="i">
                    <img :src="item.src" width="100%" height="100%" />
                </swiper-slide>
            </swiper>
        </div>
        <div>
            <p>실시간 인기 콘텐츠</p>
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
                <swiper-slide v-for="(item, i) in items2" :key="i">
                    <img :src="item.src" width="100%" height="100%" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

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
            { src: require("@/assets/images/fixed/movie09.png") },
            { src: require("@/assets/images/fixed/movie10.png") },
        ],
        items2: [
            { src: require("@/assets/images/fixed/movie11.png") },
            { src: require("@/assets/images/fixed/movie12.png") },
            { src: require("@/assets/images/fixed/movie13.png") },
            { src: require("@/assets/images/fixed/movie14.png") },
            { src: require("@/assets/images/fixed/movie15.png") },
            { src: require("@/assets/images/fixed/movie16.png") },
            { src: require("@/assets/images/fixed/movie02.png") },
            { src: require("@/assets/images/fixed/movie04.png") },
            { src: require("@/assets/images/fixed/movie06.png") },
            { src: require("@/assets/images/fixed/movie08.png") },
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
    height: 50%;
    padding: 16px;
}

.wrapper > div:nth-of-type(2) {
    height: 50%;
    padding: 16px;
    color: #fff;
}

.wrapper > div:first-child > p:first-child,
.wrapper > div:last-child > p:first-child {
    margin-bottom: 20px;
    font-size: 32px;
    color: #fff;
}
</style>
