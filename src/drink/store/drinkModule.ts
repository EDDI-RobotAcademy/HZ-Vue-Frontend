import actions, { DrinkActions } from "./actions"
import mutations, { DrinkMutations } from "./mutations"
import state, { DrinkState } from "./states"

export interface DrinkModule {
    namespaced: true
    state: DrinkState
    actions: DrinkActions
    mutations: DrinkMutations
}

const drinkModule: DrinkModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default drinkModule