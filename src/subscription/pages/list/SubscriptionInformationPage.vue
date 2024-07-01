<template>
    <v-container class="background-image">
        <v-row>
            <v-col cols="12" md="4" class="custom-col">
                <v-card
                    class="mx-auto"
                    elevation="10"
                    height="800"
                    color="rgba(255, 255, 255, 0.9)"
                >
                    <v-card-title
                        class="custom-card-title"
                        :style="{
                            background:
                                'linear-gradient(to right, rgba(30, 81, 157), rgba(218, 13, 28))',
                        }"
                    >
                        프리미엄<br />4K + HDR
                    </v-card-title>
                    <div
                        style="
                            height: calc(100% - 77px);
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        "
                    >
                        <v-card-text cols="10">
                            <br />
                            <p>월 요금</p>
                            <h3>17,000원</h3>
                            <br />
                            <p>화질과 음질</p>
                            <p>가장 좋음</p>
                            <br />
                            <p>해상도</p>
                            <p>4K(UHD) + HDR</p>
                            <br />
                            <p>공간 음향(이머시브 사운드)</p>
                            <p>포함</p>
                            <br />
                            <p>지원 디바이스</p>
                            <p>TV, 컴퓨터, 스마트폰, 태블릿</p>
                            <br />
                            <p>가구 구성원 간 동시접속자 수</p>
                            <p>4</p>
                            <br />
                            <p>저장 디바이스</p>
                            <p>6</p>
                            <br />
                            <p>광고</p>
                            <p>무광고</p>
                            <br />
                        </v-card-text>
                        <v-card-actions
                            class="justify-space-between custom-actions"
                        >
                            <div></div>
                            <v-btn
                                :style="{
                                    background:
                                        'linear-gradient(to right, rgba(30, 81, 157), rgba(218, 13, 28))',
                                }"
                                class="custom-card-title custom-button"
                                >구독</v-btn
                            >
                            <div></div>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="4" class="custom-col">
                <v-card
                    class="mx-auto"
                    elevation="10"
                    height="800"
                    color="rgba(255, 255, 255, 0.9)"
                >
                    <v-card-title
                        class="bg-black white--text"
                        :style="{
                            background:
                                'linear-gradient(to right, rgba(32, 80, 157), rgba(163, 57, 213))',
                        }"
                    >
                        스탠다드<br />1080p
                    </v-card-title>
                    <div
                        style="
                            height: calc(100% - 77px);
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        "
                    >
                        <v-card-text>
                            <br />
                            <p>월 요금</p>
                            <h3>13,500원</h3>
                            <br />
                            <p>화질과 음질</p>
                            <p>좋음</p>
                            <br />
                            <p>해상도</p>
                            <p>1080p(풀 HD)</p>
                            <br />
                            <p>지원 디바이스</p>
                            <p>TV, 컴퓨터, 스마트폰, 태블릿</p>
                            <br />
                            <p>가구 구성원 간 동시접속자 수</p>
                            <p>2</p>
                            <br />
                            <p>저장 디바이스</p>
                            <p>2</p>
                            <br />
                            <p>광고</p>
                            <p>무광고</p>
                        </v-card-text>
                        <v-card-actions
                            class="justify-space-between custom-actions"
                        >
                            <div></div>
                            <v-btn
                                :style="{
                                    background:
                                        'linear-gradient(to right, rgba(32, 80, 157), rgba(163, 57, 213))',
                                }"
                                class="custom-button"
                                >구독</v-btn
                            >
                            <div></div>
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" md="4">
                <v-card
                    class="mx-auto"
                    elevation="10"
                    height="800"
                    color="rgba(255, 255, 255, 0.9)"
                >
                    <v-card-title
                        class="bg-black white--text"
                        :style="{
                            background:
                                'linear-gradient(to right, rgba(32, 80, 157), rgba(104, 59, 221))',
                        }"
                    >
                        '베이직'<br />1080p
                    </v-card-title>
                    <div
                        style="
                            height: calc(100% - 77px);
                            display: flex;
                            flex-direction: column;
                            justify-content: space-between;
                        "
                    >
                        <v-card-text>
                            <br />
                            <p>월 요금</p>
                            <h3>5,500원</h3>
                            <br />
                            <p>화질과 음질</p>
                            <p>좋음</p>
                            <br />
                            <p>해상도</p>
                            <p>1080p(풀 HD)</p>
                            <br />
                            <p>지원 디바이스</p>
                            <p>TV, 컴퓨터, 스마트폰, 태블릿</p>
                            <br />
                            <p>가구 구성원 간 동시접속자 수</p>
                            <p>2</p>
                            <br />
                            <p>저장 디바이스</p>
                            <p>2</p>
                            <br />
                            <p>광고</p>
                            <p>생각보다 적은 광고</p>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn
                                :style="{
                                    background:
                                        'linear-gradient(to right, rgba(32, 80, 157), rgba(104, 59, 221))',
                                }"
                                class="custom-button"
                                >구독</v-btn
                            >
                        </v-card-actions>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "MembershipOptions",
};
</script>

<style scoped>
.background-image {
    width: 100vw;
    max-width: 100vw;
    height: calc(100vh - 64px);
    margin: 0px;
    background-image: url("@/assets/background_image/main_image.png");
    background-size: cover;
    background-position: center;
}

.background-image > .v-row {
    margin: 0px;
}

.custom-card-title {
    color: #fff;
}

.v-card-title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 1.2em;
    font-weight: bold;
}

.v-card-text p {
    margin: 4px 0;
}

h1.header-text {
    margin-bottom: 20px;
    color: #fff;
}

.custom-button {
    width: 90%;
    margin-bottom: 16px;
    color: #fff;
}
</style>
