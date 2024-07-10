<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-title>주문 상세 내역 보기</v-card-title>
          <v-card-text>
            <v-table v-if="purchaseData">
              <thead>
                <tr>
                  <th>항목</th>
                  <th>값</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음식 이름</td>
                  <td>{{ item.food_name }}</td>
                </tr>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음식 수량</td>
                  <td>{{ item.foodquantity }}</td>
                </tr>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음식 가격</td>
                  <td>{{ item.foodprice }}</td>
                </tr>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음료 이름</td>
                  <td>{{ item.drink_name }}</td>
                </tr>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음료 수량</td>
                  <td>{{ item.drinkquantity }}</td>
                </tr>
                <tr v-for="(item, index) in purchaseData.purchase_items" :key="index">
                  <td>음료 가격</td>
                  <td>{{ item.drinkprice }}</td>
                </tr>
                <tr>
                  <td>총 가격</td>
                  <td>{{ purchaseData.purchase_items.reduce((acc, item) => acc + item.total_price, 0) }}</td>
                </tr>
              </tbody>
            </v-table>
            <v-divider></v-divider>
            <v-row>
              <v-col class="text-right">
                <v-btn color="green" @click="placeOrder">돌아가기</v-btn>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import { mapActions } from 'vuex';
const orderModule = 'orderModule'

export default {
    name: 'OrderReadPage',
    props: {
        purchaseId: {
            type: String,
            required: true,
        }
    },
    data() {
        return {
            purchaseData: null,
        };
    },
    computed: {
        orderTotal() {
            if (!this.order || 
                    !Array.isArray(this.order.items) || 
                    this.order.items.length === 0) {
                return 0;
            }
            return this.order.items.reduce(
                (total, item) => total + item.productPrice * item.quantity,
                0
            );
        }
    },
    methods: {
        ...mapActions("orderModule", ["requestReadPurchaseToDjango"]),
        async fetchPurchaseData() {
            const purchaseId = this.purchaseId

            console.log('OrderReadPage purchaseId:', purchaseId)

            try {
                const response = await this.requestReadPurchaseToDjango({ purchaseId })
                this.purchaseData = response
                console.log("purchaseData:", this.purchaseData)
            } catch (error) {
                console.error('주문 내역 확인 중 에러:', error)
            }
        },
        placeOrder() {
            // 최종 주문 처리 로직
            alert("Order has been placed successfully!");
            // 주문 후 장바구니 초기화 또는 다른 로직 추가
            this.$router.push({ name: 'MovieListPage' }); // Assuming you want to redirect to HomePage after order
        }
    },
    created() {
        this.fetchPurchaseData();
    }
};
</script>

<style>
/* 필요한 스타일을 여기에 추가합니다. */
</style>
