import actions, { FoodcartActions } from "./actions"
// import mutations, { FoodcartMutations } from "./mutations"
import state, { FoodcartState } from "./states"

export interface FoodcartModule {
    namespaced: true
    state: FoodcartState
    actions: FoodcartActions
    // mutations: FoodcartMutations
}

const foodcartModule: FoodcartModule = {
    namespaced: true,
    state,
    actions,
    // mutations,
}

export default foodcartModule