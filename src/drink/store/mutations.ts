import { MutationTree } from "vuex";
import { DrinkState, Drink } from "./states";
import { 
    REQUEST_DRINK_LIST_TO_DJANGO,
    REQUEST_DRINK_TO_DJANGO 
} from "./mutation-types";

export interface DrinkMutations extends MutationTree<DrinkState> {
    [REQUEST_DRINK_LIST_TO_DJANGO] (state: DrinkState, receivedData: Drink[]): void
    [REQUEST_DRINK_TO_DJANGO] (state: DrinkState, receivedData: Drink): void
}

const mutations: MutationTree<DrinkState> = {
    [REQUEST_DRINK_LIST_TO_DJANGO] (state: DrinkState, receivedData: Drink[]): void {
        state.drinkList = receivedData
    },
    [REQUEST_DRINK_TO_DJANGO] (state: DrinkState, receivedData: Drink): void {
        state.drink = receivedData
    }
}

export default mutations as DrinkMutations