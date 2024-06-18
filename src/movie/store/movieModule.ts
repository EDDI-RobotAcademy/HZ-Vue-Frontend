import actions, { MovieActions } from "./actions"
import mutations, { MovieMutations } from "./mutations"
import state, { MovieState } from "./states"

export interface MovieModule {
    namespaced: true
    state: MovieState
    actions: MovieActions
    mutations: MovieMutations
}

const movieModule: MovieModule = {
    namespaced: true,
    state,
    actions,
    mutations,
}

export default movieModule