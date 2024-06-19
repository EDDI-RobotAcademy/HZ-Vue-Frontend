<template>
    <v-app-bar v-if="hideMenuBar" app dark class="transparent-bar" height="64">
        <v-btn @click="goToHome">
            <v-toolbar-title class="text-uppercase text--darken-4">
                <span class="project-name"
                    >한조팀 프로젝트 이름이 들어갈자리!</span
                >
            </v-toolbar-title>
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn 
            prepend-icon="mdi-store"
            text @click="goToMovieList" class="btn-text">
            <span>영화</span>
        </v-btn>
        <v-btn 
            prepend-icon="mdi-forum"
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
            text
            @click="signIn"
            class="btn-text"
        >
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
        goToBoardList() {
            router.push("/board/list");
        },
        signIn() {
            router.push("/account/login");
        },
        signOut() {
            // Implement sign-out logic
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
