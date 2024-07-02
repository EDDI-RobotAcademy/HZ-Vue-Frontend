<template>
    <v-app-bar v-if="hideMenuBar" app dark height="64">
        <div class="img_box">
            <img :src="src" @click="goToHome" />
        </div>
        <v-spacer></v-spacer>

        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn
                    v-if="isAuthenticated"
                    color="white"
                    v-bind="props"
                    prepend-icon="mdi-format-list-bulleted"
                >
                    <b>상품</b>
                </v-btn>
            </template>
            <v-list>
                <v-list-item
                    v-for="(move, index) in moves"
                    :key="index"
                    @click="move.action"
                >
                    <v-list-item-title>{{ move.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>

        <v-btn
            v-if="isAuthenticated"
            prepend-icon="mdi-currency-usd"
            text
            @click="goToSubscriptionList"
            class="btn-text"
        >
            <span>구독</span>
        </v-btn>
        <v-btn
            v-if="isAuthenticated"
            prepend-icon="mdi-cart"
            text
            @click="goToCart"
            class="btn-text"
        >
            <span>장바구니</span>
        </v-btn>
        <v-btn
            v-if="isAuthenticated"
            prepend-icon="mdi-receipt"
            text
            @click="goToOrder"
            class="btn-text"
        >
            <span>주문</span>
        </v-btn>
        <v-btn
            v-if="!isAuthenticated"
            prepend-icon="mdi-login"
            text
            @click="signIn"
            class="btn-text"
        >
            <span>로그인</span>
        </v-btn>
        <v-btn
            v-if="isAuthenticated"
            prepend-icon="mdi-logout"
            text
            @click="signOut"
            class="btn-text"
        >
            <span>로그아웃</span>
        </v-btn>
    </v-app-bar>
</template>

<script>
import "@mdi/font/css/materialdesignicons.css";
import router from "@/router";
import { mapActions, mapState } from "vuex";

const authenticationModule = "authenticationModule";

export default {
    data() {
        return {
            src: require("@/assets/images/fixed/logo_waiting.png"),
            navigation_drawer: false,
            joinMembership: false,
            moves: [
                {
                    title: "영화",
                    action: () => {
                        router.push("/movie/list");
                    },
                },
                {
                    title: "음식",
                    action: () => {
                        router.push("/food/list");
                    },
                },
                {
                    title: "음료",
                    action: () => {
                        router.push("/drink/list");
                    },
                },
            ],
        };
    },
    computed: {
        hideMenuBar() {
            const hiddenRoutes = [
                "/account/login",
                "/account/register",
                "/admin/dashboard",
            ];

            return !hiddenRoutes.includes(this.$route.path);
        },
        ...mapState(authenticationModule, ["isAuthenticated"]),
    },
    methods: {
        ...mapActions(authenticationModule, ["requestLogoutToDjango"]),
        goToHome() {
            if (this.$store.state.authenticationModule.isAuthenticated) {
                this.$router.push("/movie/list");
            } else {
                this.$router.push("/");
            }
        },
        goToCart() {
            this.$router.push("/cart/list");
        },
        goToSubscriptionList() {
            this.$router.push("/subscription/list");
        },
        signIn() {
            this.$router.push("/account/login");
        },
        signOut() {
            this.requestLogoutToDjango();
            router.push("/");
        },
        register() {
            this.$router.push("/account/register");
        },
    },
    mounted() {
        console.log("navigation bar mounted()");

        const userToken = localStorage.getItem("userToken");
        if (userToken) {
            console.log("You already has a userToken!!!");
            this.$store.state.authenticationModule.isAuthenticated = true;
        }
    },
    beforeUnmount() {
        window.removeEventListener("storage", this.updateLoginStatus);
    },
};
</script>

<style scoped>
.v-app-bar {
    background-color: rgb(33, 33, 33) !important;
}

.img_box {
    height: 100%;
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.img_box > img {
    height: 80%;
    cursor: pointer;
}

.btn-text {
    color: white;
}
</style>
