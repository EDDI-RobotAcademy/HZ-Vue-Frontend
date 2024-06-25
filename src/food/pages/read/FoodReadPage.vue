<template>
    <v-container>
        <h2>음식 상세 정보 보기</h2>
        <v-card v-if="food">
            <v-card-title>음식 정보</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="food.foodName" readonly label="음식 이름"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="food.foodType" readonly label="음식 종류"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-textarea v-model="food.foodDescription" readonly label="음식 설명"/>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12">
                            <v-text-field v-model="food.foodPrice" readonly label="음식 가격" type="number"/>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col cols="12">
                            <v-img :src="getFoodImageUrl(food.foodImage)" aspect-ratio="1" class="grey lighten-2">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="grey lighten-5"/>
                                    </v-row>
                                </template>
                            </v-img>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>
        </v-card>

        <v-alert v-else type="info">현재 등록된 음식이 없습니다!</v-alert>
        <div class="button-container">
            <v-btn color="primary" @click="onPurchase" class="action-button">
                <v-icon>mdi-foodcart</v-icon>
                <span class="button-text">구매하기</span>
            </v-btn>
            <v-btn color="success" @click="onAddToFoodcart" class="action-button">
                <v-icon>mdi-foodcart-plus</v-icon>
                <span class="button-text">장바구니에 추가</span>
            </v-btn>
            <router-link :to="{ name: 'FoodListPage' }" 
                            class="router-link no-underline">
                <v-btn color="secondary" class="action-button">
                    <v-icon>mdi-arrow-left</v-icon>
                    <span class="button-text">목록으로 돌아가기</span>
                </v-btn>
            </router-link>
        </div>
    </v-container>
</template>

<script>
import { mapActions, mapState } from 'vuex'

const foodModule = 'foodModule'
const foodcartModule = 'foodcartModule'

export default {
    props: {
        foodId: {
            type: String,
            required: true,
        }
    },
    computed: {
        ...mapState(foodModule, ['food'])
    },
    methods: {
        ...mapActions(foodModule, ['requestFoodToDjango']),
        ...mapActions(foodcartModule, ['requestAddFoodcartToDjango']),
        async onPurchase () {
            console.log('구매하기 버튼 눌렀음')
        },
        async onAddToFoodcart () {
            console.log('장바구니에 추가 버튼 눌렀음')
            try {
                const foodcartData = {
                    foodId: this.food.foodId,
                    foodName: this.food.foodName,
                    foodPrice: this.food.foodPrice,
                    quantity: 1, // 임시로 기본 수량 1로 설정
                };
                await this.requestAddFoodcartToDjango(foodcartData);
                this.$router.push({ name: 'FoodcartListPage' });
            } catch (error) {
                console.log('장바구니 추가 과정에서 에러 발생:', error);
            }
        },
        getFoodImageUrl (imageName) {
            console.log('imageName:', imageName)
            return require('@/assets/images/uploadImages/' + imageName)
        },
    },
    created () {
        this.requestFoodToDjango(this.foodId)
    },
}
</script>

<style scoped>
.action-button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: bold;
    padding: 0.75rem 1rem;
    margin: 0.5rem;
    border-radius: 8px;
}

.button-text {
    margin-left: 0.5rem;
}

.button-container {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
}

/* 하이퍼링크 스타일 제거 */
.no-underline {
    text-decoration: none;
}

/* router-link 스타일 재정의 */
.router-link {
    text-decoration: none;
    color: inherit;
}
</style>