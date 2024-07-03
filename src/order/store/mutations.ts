import { MutationTree } from "vuex";
import { OrderState, FoodorderItem, DrinkorderItem } from "./states";
import { 
    REQUEST_FOODORDER_TO_DJANGO,
    REQUEST_FOODORDER_LIST_TO_DJANGO,
    REQUEST_DRINKORDER_TO_DJANGO,
    REQUEST_DRINKORDER_LIST_TO_DJANGO,
} from "./mutation-types";

export interface OrderMutations extends MutationTree<OrderState> {
    [REQUEST_FOODORDER_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem): void
    [REQUEST_FOODORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: FoodorderItem[]): void
    [REQUEST_DRINKORDER_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem): void
    [REQUEST_DRINKORDER_LIST_TO_DJANGO] (state: OrderState, receivedData: DrinkorderItem[]): void
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
    }
}

export default mutations as OrderMutations