<template>
    <v-container class="container">
        <v-card flat class="logo-card">
            <v-img
                width="100%"
                height="100%"
                :src="require('@/assets/images/fixed/logo_square.png')"
                @click="goToHome"
                class="logo-img"
            />
        </v-card>

        <div class="login-wrapper">
            <div class="login-box">
                <div
                    class="login_text"
                    :style="{ marginBottom: login_flag ? '32px' : '8px' }"
                >
                    로그인
                </div>

                <div v-if="login_flag == false" class="login-fail-box">
                    {{ email }}의 비밀번호가 올바르지 않습니다.
                    <br />
                    비밀번호를 재설정하거나, 다시 시도해 보세요.
                </div>

                <v-responsive class="mx-auto" min-width="300" max-width="344">
                    <v-form v-model="form" @submit.prevent="onSubmit">
                        <v-text-field
                            label="이메일 주소"
                            variant="solo"
                            v-model="email"
                            color="#fff"
                            bg-color="rgba(0, 0, 0, 0.6)"
                            clearable
                            :rules="[email_required]"
                            class="email-text-field"
                        />

                        <v-text-field
                            label="비밀번호"
                            variant="solo"
                            v-model="password"
                            color="#fff"
                            bg-color="rgba(0, 0, 0,0.6)"
                            :rules="[password_required]"
                            :append-inner-icon="
                                visible ? 'mdi-eye-off' : 'mdi-eye'
                            "
                            :type="visible ? 'text' : 'password'"
                            @click:append-inner="visible = !visible"
                            class="password-text-field"
                        />

                        <v-btn
                            width="100%"
                            color="#f6c748"
                            size="large"
                            :disabled="!form"
                            :loading="loading"
                            type="submit"
                            variant="elevated"
                            block
                        >
                            로그인
                        </v-btn>
                    </v-form>
                </v-responsive>
            </div>
        </div>
    </v-container>
</template>

<script>
import router from "@/router";

export default {
    data: () => ({
        form: false,
        email: null,
        password: null,
        visible: false,
        loading: false,
        login_flag: true,
    }),

    methods: {
        goToHome() {
            router.push("/");
        },

        onSubmit() {
            if (!this.form) return;

            this.loading = true;

            // 회원정보 일치하는지 확인하는 작업 필요함
            // 회원정보 일치하면
            setTimeout(
                () => ((this.loading = false), (this.login_flag = true)),
                2000
            );
            // 회원정보 일치하지않으면
            setTimeout(
                () => ((this.loading = false), (this.login_flag = false)),
                2000
            );
        },

        email_required(v) {
            return !!v || "정확한 이메일 주소를 입력하세요.";
        },

        password_required(v) {
            return !!v || "비밀번호는 4~60자 사이여야 합니다.";
        },
    },
};
</script>

<style scoped>
.container {
    width: 100%;
    max-width: 100vw;
    height: 100%;
    padding: 20px 40px 20px 40px;
    background: linear-gradient(
            rgba(255, 255, 255, 0.4),
            rgba(255, 255, 255, 0.4)
        ),
        url("@/assets/background_image/main_image.png");
    background-size: cover;
}

.logo-card {
    width: 120px;
    height: 60px;
    display: inline-block;
    background: transparent;
}

.logo-img {
    object-fit: fill;
    cursor: pointer;
}

>>> .v-img__img--contain {
    object-fit: fill !important;
}

.login-wrapper {
    height: calc(100% - 160px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.login-box {
    padding: 60px 80px;
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 8px;
}

.login_text {
    color: #fff;
    font-size: 32px;
    font-weight: bold;
}

.login-fail-box {
    background-color: rgba(39, 54, 108, 1);
    padding: 16px;
    margin-bottom: 16px;
    border-radius: 10px;
    color: #fff;
}

.email-text-field {
    margin-bottom: 8px;
}

.password-text-field {
    margin-bottom: 8px;
}

>>> .v-label.v-field-label {
    color: rgba(255, 255, 255, 0.8) !important;
}

>>> .v-text-field input {
    color: #fff;
}

>>> .mdi-eye::before {
    color: rgba(255, 255, 255, 0.8) !important;
}

>>> .mdi-eye-off::before {
    color: rgba(255, 255, 255, 0.8) !important;
}
</style>
