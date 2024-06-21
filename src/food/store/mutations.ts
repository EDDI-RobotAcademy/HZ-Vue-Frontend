import { MutationTree } from "vuex";
import { FoodState, Food } from "./states";
import { 
    REQUEST_FOOD_LIST_TO_DJANGO,
    REQUEST_FOOD_TO_DJANGO 
} from "./mutation-types";

export interface FoodMutations extends MutationTree<FoodState> {
    [REQUEST_FOOD_LIST_TO_DJANGO] (state: FoodState, receivedData: Food[]): void
    [REQUEST_FOOD_TO_DJANGO] (state: FoodState, receivedData: Food): void
}

const mutations: MutationTree<FoodState> = {
    [REQUEST_FOOD_LIST_TO_DJANGO] (state: FoodState, receivedData: Food[]): void {
        state.foodList = receivedData
    },
    [REQUEST_FOOD_TO_DJANGO] (state: FoodState, receivedData: Food): void {
        state.food = receivedData
    }
}

export default mutations as FoodMutations