<template>
    <v-app-bar v-if="hideMenuBar" app dark class="transparent-bar" height="64">
        <v-btn @click="goToHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span class="project-name">WAITING</span>
            </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <v-menu>
            <template v-slot:activator="{props}">
                <v-btn color="white" v-bind="props" prepend-icon="mdi-format-list-bulleted">
                    <b>상품</b>
                </v-btn>
            </template>
            <v-list>
                <v-list-item v-for="(move, index) in moves"
                            :key="index" :value="index" @click="move.action">
                    <v-list-item-title>{{ move.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
        

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
        <v-btn v-if="!isLogin" text @click="signIn" class="btn-text">
            <v-icon left>mdi-login</v-icon>
            <span>로그인</span>
        </v-btn>
        <v-btn v-if="isLogin" text @click="signOut" class="btn-text">
            <v-icon left>mdi-logout</v-icon>
            <span>로그아웃</span>
        </v-btn>
        <v-btn
            v-if="!joinMembership"
            color="red"
            dark
            prepend-icon="mdi-account-plus"
            text @click="register" class="btn-text">
            <span>회원가입</span>
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
            isLogin: !!localStorage.getItem("userToken"),
            joinMembership: false,
            moves: [
                { title: '영화', action: this.goToMovieList },
                { title: '음식', action: this.goToFoodList },
                { title: '음료', action: this.goToDrinkList },
            ]
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
            this.$router.push("/");
        },
        goToMovieList() {
            this.$router.push("/movie/list");
        },
        goToFoodList() {
            this.$router.push("/food/list");
        },
        goToDrinkList() {
            this.$router.push("/drink/list");
        },
        goToBoardList() {
            this.$router.push("/board/list");
        },
        signIn() {
            this.$router.push("/account/login");
        },
        signOut() {
            localStorage.removeItem("userToken")
            this.updateLoginStatus()
            router.push('/')
        },
        updateLoginStatus () {
            this.isLogin = !!localStorage.getItem("userToken")
        },
        register() {
            this.$router.push("/account/register");
        },
    },
    mounted () {
        window.addEventListener('storage', this.updateLoginStatus)
    },
    beforeUnmount () {
        window.removeEventListener('storage', this.updateLoginStatus)
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
