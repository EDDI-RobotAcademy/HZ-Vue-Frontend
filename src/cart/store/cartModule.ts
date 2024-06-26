import actions, { CartActions } from "./actions"
// import mutations, { FoodcartMutations } from "./mutations"
import state, { CartState } from "./states"

export interface CartModule {
    namespaced: true
    state: CartState
    actions: CartActions
    // mutations: FoodcartMutations
}

const cartModule: CartModule = {
    namespaced: true,
    state,
    actions,
    // mutations,
}

export default cartModule