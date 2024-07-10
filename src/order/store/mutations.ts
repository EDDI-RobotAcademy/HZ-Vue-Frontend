import { MutationTree } from "vuex";
import { OrderState, FoodorderItem, DrinkorderItem, PurchaseData } from "./states";
import { 
    REQUEST_FOODORDER_TO_DJANGO,
    REQUEST_FOODORDER_LIST_TO_DJANGO,
    REQUEST_DRINKORDER_TO_DJANGO,
    REQUEST_DRINKORDER_LIST_TO_DJANGO,
    SET_PURCHASE_DATA
} from "./mutation-types";

export interface OrderMutations extends MutationTree<OrderState> {
    [REQUEST_FOODORDER_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem): void
    [REQUEST_FOODORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem[]): void
    [REQUEST_DRINKORDER_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem): void
    [REQUEST_DRINKORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem[]): void
    [SET_PURCHASE_DATA] (state: OrderState, receivedData: PurchaseData): void
}

const mutations: MutationTree<OrderState> = {
    [REQUEST_FOODORDER_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem): void {
        state.foodorder = receivedData
    },
    [REQUEST_FOODORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem[]): void {
        state.foodorderList = receivedData
    },
    [REQUEST_DRINKORDER_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem): void {
        state.drinkorder = receivedData
    },
    [REQUEST_DRINKORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem[]): void {
        state.drinkorderList = receivedData
    },
    [SET_PURCHASE_DATA] (state: OrderState, receivedData: PurchaseData): void { // 추가된 부분
        state.purchaseData = receivedData
    }
}

export default mutations as OrderMutations