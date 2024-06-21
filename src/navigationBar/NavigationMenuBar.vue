<template>
    <v-app-bar v-if="hideMenuBar" app dark class="transparent-bar" height="64">
        <v-btn @click="goToHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span class="project-name">WAITING</span>
            </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn 
            prepend-icon="mdi-video-vintage"
            text @click="goToMovieList" class="btn-text">
            <span>영화</span>
        </v-btn>
        <v-btn 
            prepend-icon="mdi-food"
            text @click="goToFoodList" class="btn-text">
            <span>음식</span>
        </v-btn>
        <v-btn 
            prepend-icon="mdi-beer"
            text @click="goToDrinkList" class="btn-text">
            <span>음료</span>
        </v-btn>
        <v-btn 
            prepend-icon="mdi-currency-usd"
            text @click="goToBoardList" class="btn-text">
            <span>구독</span>
        </v-btn>
        <v-btn 
            prepend-icon="mdi-login"
            v-if="!isLogin" text @click="signIn" class="btn-text">
            <span>로그인</span>
        </v-btn>
        <v-btn
            v-if="!joinMembership"
            color="red"
            dark
            prepend-icon="mdi-account-plus"
            text @click="register" class="btn-text">
            <span>회원가입</span>
        </v-btn>
        <v-btn v-if="isLogin" text @click="signOut" class="btn-text">
            <v-icon left>mdi-logout</v-icon>
            <span>로그아웃</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import router from "@/router";

export default {
    data() {
        return {
            navigation_drawer: false,
            accessToken: null,
            isLogin: false,
            joinMembership: false,
        };
    },
    computed: {
        hideMenuBar() {
            const hiddenRoutes = ["/account/login"];

            return !hiddenRoutes.includes(this.$route.path);
        },
    },
    methods: {
        goToHome() {
            router.push("/");
        },
        goToMovieList() {
            router.push("/movie/list");
        },
        goToFoodList() {
            router.push("/food/list");
        },
        goToDrinkList() {
            router.push("/drink/list");
        },
        goToBoardList() {
            router.push("/board/list");
        },
        signIn() {
            router.push("/account/login");
        },
        signOut() {
            // Implement sign-out logic
        },
        register() {
            router.push("/account/register");
        },
    },
};
</script>

<style scoped>
.transparent-bar {
    background-color: rgb(33, 33, 33) !important;
}
.project-name {
    color: white;
}
.btn-text {
    color: white;
}
</style>
