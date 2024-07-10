<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card>
                    <v-card-title>Shopping Foodcart</v-card-title>
                    <v-card-text>
                        <v-table>
                            <thead>
                            <tr>
                                <th>Select</th>
                                <th>Food</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in foodcartItems" :key="item.foodcartItemId">
                                <td>
                                    <v-checkbox v-model="selectedFoodItems" :value="item"></v-checkbox>
                                </td>
                                <td>{{ item.foodName }}</td>
                                <td>{{ item.foodPrice }}</td>
                                <td>
                                    <v-text-field
                                        v-model="item.quantity"
                                        type="number"
                                        min="1"
                                        @change="updateQuantity(item)"
                                    ></v-text-field>
                                </td>
                                <td>{{ item.foodPrice * item.quantity }}</td>
                                <td>
                                    <v-btn color="red" @click="removeItem(item)">Remove</v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </v-table>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col class="text-right">
                                <strong>Total: {{ selectedFoodItemsTotal }}</strong>
                            </v-col>
                        </v-row>
                    </v-card-text>
               
                    <v-card-title>Shopping Drinkcart</v-card-title>
                    <v-card-text>
                        <v-table>
                            <thead>
                            <tr>
                                <th>Select</th>
                                <th>Drink</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="item in drinkcartItems" :key="item.drinkcartItemId">
                                <td>
                                    <v-checkbox v-model="selectedDrinkItems" :value="item"></v-checkbox>
                                </td>
                                <td>{{ item.drinkName }}</td>
                                <td>{{ item.drinkPrice }}</td>
                                <td>
                                    <v-text-field
                                        v-model="item.quantity"
                                        type="number"
                                        min="1"
                                        @change="updateQuantity(item)"
                                    ></v-text-field>
                                </td>
                                <td>{{ item.drinkPrice * item.quantity }}</td>
                                <td>
                                    <v-btn color="red" @click="removeItem(item)">Remove</v-btn>
                                </td>
                            </tr>
                            </tbody>
                        </v-table>
                        <v-divider></v-divider>
                        <v-row>
                            <v-col class="text-right">
                                <strong>Total: {{ selectedDrinkItemsTotal }}</strong>
                            </v-col> 
                        </v-row>
                        <v-row>
                            <v-col class="text-right">
                                    <strong>Real_Total: {{ selectedItemsTotal }}</strong>
                            </v-col> 
                            <v-col>
                                <v-btn color="blue" @click="confirmCheckout">Checkout</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-text>             
                </v-card>
            </v-col>
        </v-row>
        <!-- Confirmation Dialog -->
        <v-dialog v-model="isCheckoutDialogVisible" max-width="500">
            <v-card>
                <v-card-title>Confirm Checkout</v-card-title>
                <v-card-text>Are you sure you want to order the selected items?</v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="isCheckoutDialogVisible = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="proceedToOrder">Confirm</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

const cartModule = 'cartModule'
const orderModule = 'orderModule'

import router from "@/router"; // Assuming you have a router set up

export default {
    data() {
        return {
            foodcartItems: [],
            drinkcartItems: [],
            selectedFoodItems: [],
            selectedDrinkItems: [],
            selectedItems: [],
            isCheckoutDialogVisible: false,
        };
    },
    computed: {
        foodcartTotal() {
            if (!Array.isArray(this.foodcartItems) || this.foodcartItems.length === 0) {
                return 0;
            }
            return this.foodcartItems.reduce(
                (total, food) => total + food.foodPrice * food.quantity,
                0
            );
        },
        drinkcartTotal() {
            if (!Array.isArray(this.drinkcartItems) || this.drinkcartItems.length === 0) {
                return 0;
            }
            return this.drinkcartItems.reduce(
                (total, drink) => total + drink.drinkPrice * drink.quantity,
                0
            );
        },
        selectedFoodItemsTotal() {
            if (!Array.isArray(this.selectedFoodItems) || this.selectedFoodItems.length === 0) {
                return 0;
            }
            return this.selectedFoodItems.reduce(
                (total, food) => total + food.foodPrice * food.quantity ,
                0
            );
        },
        selectedDrinkItemsTotal() {
            if (!Array.isArray(this.selectedDrinkItems) || this.selectedDrinkItems.length === 0) {
                return 0;
            }
            return this.selectedDrinkItems.reduce(
                (total, drink) => total + drink.drinkPrice * drink.quantity ,
                0
            );
        },
        selectedItemsTotal(){
            return(
                this.selectedFoodItemsTotal + this.selectedDrinkItemsTotal          
            );
        }
    },
    methods: {
        ...mapActions("cartModule", ["requestFoodcartListToDjango"]),
        ...mapActions("cartModule", ["requestDrinkcartListToDjango"]),
        ...mapActions("orderModule", ["requestCreateFoodorderToDjango"]),
        ...mapActions("orderModule", ["requestCreateDrinkorderToDjango"]),
        ...mapActions("orderModule", ["requestCreatePurchaseToDjango"]),
        
        updateQuantity(item) {
            // 수량 업데이트 로직
        },
        removeItem(item) {
            this.foodcartItems = this.foodcartItems.filter(foodcartItem => foodcartItem.foodcartItemId !== item.foodcartItemId);
            this.drinkcartItems = this.drinkcartItems.filter(drinkcartItem => drinkcartItem.drinkcartItemId !== item.drinkcartItemId);
            this.selectedFoodItems = this.selectedFoodItems.filter(selectedFoodItem => selectedFoodItem.foodcartItemId !== item.foodcartItemId);
            this.selectedDrinkItems = this.selectedDrinkItems.filter(selectedDrinkItem => selectedDrinkItem.drinkcartItemId !== item.drinkcartItemId);
        },
        confirmCheckout() {
            this.isCheckoutDialogVisible = true;
        },
        async proceedToOrder() {
            this.isCheckoutDialogVisible = false;

            console.log('foodcartItems:', this.foodcartItems);
            console.log('selectedFoodItems:', this.selectedFoodItems);
            console.log('drinkcartItems:', this.drinkcartItems);
            console.log('selectedDrinkItems:', this.selectedDrinkItems);
            // const response = await this.requestCreateOrderToDjango()

            try {
                const selectedFoodcartItems = this.foodcartItems.filter(item => this.selectedFoodItems.includes(item));
                const foodorderItems = selectedFoodcartItems.map(item => ({
                    foodcartItemId: item.foodcartItemId,
                    foodorderPrice: item.foodPrice,
                    quantity: item.quantity
                }));
                const selectedDrinkcartItems = this.drinkcartItems.filter(item => this.selectedDrinkItems.includes(item));
                const drinkorderItems = selectedDrinkcartItems.map(item => ({
                    drinkcartItemId: item.drinkcartItemId,
                    drinkorderPrice: item.drinkPrice,
                    quantity: item.quantity
                }));
                const foodorderId = await this.requestCreateFoodorderToDjango({ items: foodorderItems });
                const drinkorderId = await this.requestCreateDrinkorderToDjango({ items: drinkorderItems });

                const purchasePayload = {
                    order: [
                        { foodorderId: foodorderId },
                        { drinkorderId: drinkorderId }
                    ]
                };
                
                console.log("purchasePayload:", purchasePayload)

                const purchaseId = await this.requestCreatePurchaseToDjango(purchasePayload);
                console.log("purchaseId: ", purchaseId)
                

                this.$router.push({ 
                    name: 'OrderReadPage', 
                    params: { purchaseId: purchaseId.toString() } 
                });

            } catch (error) {
                console.error('Order creation failed:', error);
            }

            // this.$router.push({ name: 'OrderReadPage', params: { selectedItems: this.selectedItems } });
        },
        async fetchFoodcartList() {
            try {
                const response = await this.requestFoodcartListToDjango();
                this.foodcartItems = response;
            } catch (error) {
                console.error("Error fetching foodcart list:", error);
            }
        },
        async fetchDrinkcartList() {
            try {
                const response = await this.requestDrinkcartListToDjango();
                this.drinkcartItems = response;
            } catch (error) {
                console.error("Error fetching drinkcart list:", error);
            }
        },
    },
    created() {
        this.fetchFoodcartList();
        this.fetchDrinkcartList();
    },
};
</script>

<style>
/* 필요한 스타일을 여기에 추가합니다. */
</style>
