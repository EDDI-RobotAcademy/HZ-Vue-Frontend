import actions, { FoodActions } from "./actions"
import mutations, { FoodMutations } from "./mutations"
import state, { FoodState } from "./states"

export interface FoodModule {
    namespaced: true
    state: FoodState
    actions: FoodActions
    mutations: FoodMutations
}

const foodModule: FoodModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default foodModule