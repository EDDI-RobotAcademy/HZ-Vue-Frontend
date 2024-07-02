<template>
    <v-container class="container">
        <div class="register-wrapper">
            <div>
                <p>회원 가입</p>

                <v-responsive class="mx-auto" min-width="400">
                    <v-form
                        v-model="form"
                        @submit.prevent="onSubmit"
                        lazy-validation
                    >
                        <v-text-field
                            label="이메일 주소"
                            variant="solo"
                            v-model="email"
                            color="#fff"
                            bg-color="rgba(0, 0, 0, 0.6)"
                            disabled
                        />

                        <div class="nickname-box">
                            <v-text-field
                                label="닉네임"
                                variant="solo"
                                v-model="nickname"
                                :error-messages="nicknameErrorMessage"
                                :disabled="isNicknameValid == true"
                                color="#fff"
                                bg-color="rgba(0, 0, 0, 0.6)"
                            />
                            <div class="button-box">
                                <v-btn
                                    color="#f6c748"
                                    small
                                    :disabled="
                                        nickname == '' ||
                                        isNicknameValid == true
                                    "
                                    type="button"
                                    @click="checkNicknameDuplication"
                                >
                                    중복 검사
                                </v-btn>
                            </div>
                        </div>
                        <div v-if="isNicknameValid" class="valid-nickname-box">
                            사용 가능한 닉네임입니다.
                        </div>

                        <v-radio-group
                            v-model="gender"
                            inline
                            label="성별"
                            color="#fff"
                        >
                            <v-radio
                                label="남성"
                                value="man"
                                color="#fff"
                                base-color="#fff"
                            ></v-radio>
                            <v-radio
                                label="여성"
                                value="woman"
                                base-color="#fff"
                            ></v-radio>
                        </v-radio-group>

                        <div class="age-box">
                            <p>나이</p>
                            <v-slider
                                v-model="age"
                                max="120"
                                :step="1"
                                thumb-label="always"
                                thumb-color="#f6c748"
                                track-color="#fff"
                                track-fill-color="#f6c748"
                                thumb-size="16"
                                track-size="8"
                            ></v-slider>
                        </div>

                        <v-btn
                            width="100%"
                            color="#f6c748"
                            size="large"
                            :disabled="!isValidForSubmission"
                            type="submit"
                            variant="elevated"
                            block
                        >
                            가입하기
                        </v-btn>
                    </v-form>
                </v-responsive>
            </div>
        </div>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";

const authenticationModule = "authenticationModule";
const accountModule = "accountModule";

export default {
    data() {
        return {
            form: false,
            email: null,
            nickname: null,
            gender: "man",
            age: 0,
            nicknameErrorMessage: [],
            isNicknameValid: false,
        };
    },

    async created() {
        await this.requestUserInfo();
    },

    computed: {
        isValidForSubmission() {
            return this.form && this.isNicknameValid && this.age !== 0;
        },
    },

    methods: {
        ...mapActions(authenticationModule, [
            "requestUserInfoToDjango",
            "requestAddRedisAccessTokenToDjango",
        ]),
        ...mapActions(accountModule, [
            "requestNicknameDuplicationCheckToDjango",
            "requestCreateNewAccountToDjango",
        ]),

        async requestUserInfo() {
            try {
                const userInfo = await this.requestUserInfoToDjango();
                this.email = userInfo.kakao_account.email;
            } catch (error) {
                console.error("에러:", error);
                alert("사용자 정보를 가져오는데 실패하였습니다!");
            }
        },

        async checkNicknameDuplication() {
            try {
                await this.requestNicknameDuplicationCheckToDjango({
                    newNickname: this.nickname.trim(),
                }).then((res) => {
                    if (res.data.isDuplicate) {
                        this.nicknameErrorMessage = [
                            "이 nickname은 이미 사용중입니다!",
                        ];
                        this.isNicknameValid = false;
                    } else {
                        this.isNicknameValid = true;
                    }
                });
            } catch (error) {
                alert("닉네임 중복 확인에 실패했습니다!");
                this.isNicknameValid = false;
            }
        },

        async onSubmit() {
            if (this.form) {
                const accountInfo = {
                    email: this.email,
                    nickname: this.nickname,
                    // 성별, 나이 추가해야됨
                };

                await this.requestCreateNewAccountToDjango(accountInfo);
                console.log("전송한 데이터:", accountInfo);

                const accessToken = localStorage.getItem("accessToken");
                const email = accountInfo.email;
                console.log("register submitForm email:", email);
                await this.requestAddRedisAccessTokenToDjango({
                    email,
                    accessToken,
                });

                this.$router.push("/");
            }
        },
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    background: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
        ),
        url("@/assets/background_image/main_image.png");
    background-size: cover;
}

.register-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.register-wrapper > div {
    padding: 60px 80px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
}

.register-wrapper > div > p:first-child {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
}

.v-form > .v-text-field:first-child {
    margin-bottom: 8px;
}

.nickname-box {
    height: 100%;
    display: flex;
    margin-bottom: 2px;
}

.nickname-box .button-box {
    display: flex;
    align-items: center;
    margin-bottom: 22px;
    margin-left: 12px;
}

.valid-nickname-box {
    font-size: 12px;
    color: #f6c748;
    margin-top: -14px;
}

.age-box > p:first-of-type {
    color: #fff;
    font-size: 16px;
    margin-bottom: 32px;
}

:deep(.v-label.v-field-label) {
    color: rgba(255, 255, 255, 0.8) !important;
}

:deep(.v-text-field input) {
    color: #fff !important;
}

:deep(.v-text-field .v-input__details) {
    padding-inline: unset !important;
}

:deep(.v-radio-group > .v-input__control > .v-label) {
    color: #fff !important;
    margin-inline-start: 0px !important;
    margin-bottom: 12px !important;
    opacity: 1 !important;
}

:deep(
        .v-radio-group
            > .v-input__control
            > .v-label
            + .v-selection-control-group
    ) {
    padding-inline-start: 0px !important;
    margin-top: 0px !important;
}

:deep(.v-selection-control--inline .v-label) {
    color: #fff !important;
}

:deep(.v-selection-control--density-default) {
    --v-selection-control-size: null !important;
}

:deep(.v-selection-control__wrapper) {
    margin-right: 12px !important;
}

:deep(.v-selection-control--inline) {
    flex: auto !important;
}

:deep(.v-slider-thumb__label) {
    background-color: #f6c748 !important;
    color: #000 !important;
}
</style>
