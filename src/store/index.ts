import { createStore } from "vuex";
// import boardModule from "@/board/store/boardModule"
import movieModule from "@/movie/store/movieModule";
import drinkModule from "@/drink/store/drinkModule";
import foodModule from "@/food/store/drinkModule";
import authenticationModule from "@/authentication/store/authenticationModule";
import accountModule from "@/account/store/accountModule";
// import authenticationModule from "@/authentication/store/authenticationModule"
// import accountModule from "@/account/store/accountModule";

export default createStore({
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        // boardModule,
        authenticationModule,
        accountModule,
        movieModule,
        drinkModule,
        foodModule
        // authenticationModule,
        // accountModule,
    },
});
