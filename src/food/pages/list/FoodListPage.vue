<template>
    <div class="container">
        <div class="contents-wrapper">
            <div>
                <p>영화에는 역시 치킨 !</p>
                <p>영화를 시청하며</p>
                <p>든~든하고 행복하게</p>
                <p>치킨을 즐겨보세요 !</p>
            </div>

            <swiper
                :loop="true"
                :spaceBetween="10"
                :thumbs="{ swiper: thumbsSwiper }"
                :modules="modules"
                class="mySwiper2"
            >
                <swiper-slide v-for="food in foodList" :key="food.foodId">
                    <div>
                        <img
                            :src="getImageUrl(food.foodImage)"
                            width="100%"
                            height="100%"
                        />
                    </div>
                    <div>
                        <p>{{ food.foodName }}</p>
                        <p>{{ food.foodDescription }}</p>
                        <p>{{ Number(food.foodPrice) }}원</p>
                        <div>
                            <v-btn @click="onPurchase" prepend-icon="mdi-cart">
                                구매하기
                            </v-btn>
                            <v-btn
                                @click="onAddToCart(food)"
                                prepend-icon="mdi-cart-plus"
                            >
                                장바구니에 추가
                            </v-btn>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
            <swiper
                @swiper="setThumbsSwiper"
                :loop="true"
                :spaceBetween="10"
                :slidesPerView="4.3"
                :freeMode="true"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide v-for="food in foodList" :key="food.foodId">
                    <img :src="getImageUrl(food.foodImage)" />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Thumbs } from "swiper/modules";
import { mapActions, mapState } from "vuex";

const foodModule = "foodModule";
const cartModule = "cartModule";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },

    setup() {
        let thumbsSwiper = ref(null);

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        };

        return {
            thumbsSwiper,
            setThumbsSwiper,
            modules: [FreeMode, Thumbs],
        };
    },

    computed: {
        ...mapState(foodModule, ["foodList", "food"]),
    },

    mounted() {
        this.requestFoodListToDjango();
    },

    methods: {
        ...mapActions(foodModule, [
            "requestFoodListToDjango",
            "requestFoodToDjango",
        ]),
        ...mapActions(cartModule, ["requestAddFoodcartToDjango"]),

        async onPurchase() {
            console.log("구매하기 버튼 눌렀음");
        },
        async onAddToCart(food) {
            console.log("장바구니에 추가 버튼 눌렀음");

            try {
                const foodcartData = {
                    foodId: food.foodId,
                    foodName: food.foodName,
                    foodPrice: food.foodPrice,
                    foodquantity: 1, // 임시로 기본 수량 1로 설정
                };

                await this.requestAddFoodcartToDjango(foodcartData);
                this.$router.push({ name: "CartListPage" });
            } catch (error) {
                console.log("장바구니 추가 과정에서 에러 발생:", error);
            }
        },

        getImageUrl(imageName) {
            return require("@/assets/images/uploadImages/" + imageName);
        },
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    padding: 20px 40px 20px 40px;
    background: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
        ),
        url("@/assets/background_image/main_image.png");
    background-size: cover;
}

.contents-wrapper {
    height: calc(100vh - 124px);
}

.contents-wrapper > div:first-of-type {
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 20px;
    padding-left: 80px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)),
        url(@/assets/background_image/chicken_image.jpg);
    background-size: cover;
}

.contents-wrapper > div:first-of-type > p:first-of-type {
    color: #fff;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 12px;
}

.contents-wrapper > div:first-of-type > p:nth-of-type(2),
.contents-wrapper > div:first-of-type > p:nth-of-type(3),
.contents-wrapper > div:first-of-type > p:nth-of-type(4) {
    color: #fff;
    font-size: 18px;
}

.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #000;

    display: flex;
    justify-content: center;
    align-items: center;
}

.swiper-slide:first-of-type {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-slide > div:first-of-type {
    width: 60%;
    height: 100%;
}

.swiper-slide > div:nth-of-type(2) {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #fff;
}

.swiper-slide > div:nth-of-type(2) > p:first-of-type {
    font-size: 32px;
}
.swiper-slide > div:nth-of-type(2) > p:nth-of-type(2) {
    font-size: 14px;
}

.swiper-slide > div:nth-of-type(2) > p:nth-of-type(3) {
    font-size: 24px;
}

.swiper-slide > div:nth-of-type(2) > p:first-of-type,
.swiper-slide > div:nth-of-type(2) > p:nth-of-type(2),
.swiper-slide > div:nth-of-type(2) > p:nth-of-type(3) {
    padding: 5px;
}

.swiper-slide > div:nth-of-type(2) > div:first-of-type {
    display: flex;
    justify-content: space-around;
}

.swiper-slide > div:nth-of-type(2) > div:first-of-type > .v-btn {
    width: 30%;
    font-weight: bold;
    color: #000;
    background-color: #f6c748;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper {
    width: 100%;
    height: 300px;
    margin-left: auto;
    margin-right: auto;
}

.swiper-slide {
    background-size: cover;
    background-position: center;
}

.mySwiper2 {
    height: 50%;
    width: 100%;
}

.mySwiper {
    height: 20%;
    box-sizing: border-box;
    padding: 10px 0;
}

.mySwiper .swiper-slide {
    width: 25%;
    height: 100%;
    opacity: 0.6;
}

.mySwiper .swiper-slide-thumb-active {
    opacity: 1;
}
</style>
