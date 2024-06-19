import { MutationTree } from "vuex";
import { MovieState, Movie } from "./states";
import { 
    REQUEST_MOVIE_LIST_TO_DJANGO 
} from "./mutation-types";

export interface MovieMutations extends MutationTree<MovieState> {
    [REQUEST_MOVIE_LIST_TO_DJANGO] (state: MovieState, receivedData: Movie[]): void
}

const mutations: MutationTree<MovieState> = {
    [REQUEST_MOVIE_LIST_TO_DJANGO] (state: MovieState, receivedData: Movie[]): void {
        state.movieList = receivedData
    }
}

export default mutations as MovieMutations