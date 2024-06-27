<template>
    <v-parallax
        height="calc(100vh - 64px)"
        src="@/assets/background_image/main_image.png"
    >
        <div class="logo-box">
            <img :src="src" class="logo" />
            <p class="text">모든 OTT의 독점 서비스와 배달을 한번에 !</p>
            <p class="text2">
                모든 독점 서비스 시청을 한 곳에서 자유롭게 시청하세요.
            </p>
            <p class="text2">
                사용할 준비가 되셨나요 ? 구독권을 구매하고 무제한으로 즐겨보세요
                !
            </p>
            <v-btn variant="tonal" size="x-large" class="button" @click="goToSubscriptionList">
                구독권 구매
            </v-btn>
        </div>
    </v-parallax>
</template>

<script>
export default {
    data: () => ({
        src: require("@/assets/images/fixed/logo_waiting.png"),
    }),
    methods: {
        goToSubscriptionList() {
            this.$router.push("/subscription/list")
        },
    }
};
</script>

<style scoped>
.logo-box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logo {
    height: 30%;
    margin-bottom: 32px;
}

.text {
    font-size: 48px;
    color: #fff;
}

.text2 {
    font-size: 32px;
    color: #fff;
}

.button {
    margin-top: 32px;
    border-radius: 50px;
    color: #fff;
    background-color: rgb(28, 28, 218);
}
</style>
``