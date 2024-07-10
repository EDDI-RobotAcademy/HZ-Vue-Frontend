<template>
    <v-container>
      <div>
        <!-- 왼쪽 네비게이션 바 -->
        <div>
              <v-navigation-drawer
                image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
                theme="dark"
                permanent>
                <v-list nav>
                  <v-list-item @click="this.tab = 0" prepend-icon="mdi-view-dashboard" title="대쉬 보드" value="dashboard"></v-list-item>
                  <v-list-item @click="this.tab = 1" prepend-icon="mdi-account-supervisor-circle" title="회원 관리" value="members"></v-list-item>
                  <v-list-item @click="this.tab = 2" prepend-icon="mdi-chart-bar" title="데이터 분석" value="data-analysis"></v-list-item>
                  <v-list-item @click="this.tab = 3" prepend-icon="mdi-package-variant-closed" title="상품 등록" value="product-registration"></v-list-item>
                </v-list>
              </v-navigation-drawer>
        </div>
        <!-- 전체 회원 수 카드 -->
        <div v-if="tab == 0">
          <v-col cols="3">
            <v-card class="mb-3">
              <v-card-title>전체 회원 수</v-card-title>
              <v-card-text class="display-4 text-center">1000</v-card-text>
            </v-card>
          </v-col>
    
          <!-- 구독 회원 수 카드 -->
          <v-col cols="3">
            <v-card class="mb-3">
              <v-card-title>구독 회원 수</v-card-title>
              <v-card-text class="display-4 text-center">500</v-card-text>
            </v-card>
          </v-col>
    
          <!-- 전체 상품 수 -->
          <v-col cols="3">
            <v-card class="mb-3">
              <v-card-title>전체 상품 수</v-card-title>
              <v-card-text class="display-4 text-center">500</v-card-text>
            </v-card>
          </v-col>
        </div>
  
        <div v-if="tab == 1">
          <div>123</div>
        </div>

        <div v-if="tab == 2">
          <logistic-regression-result-page></logistic-regression-result-page>
        </div>

        <div v-if="tab == 3">
          <div>123</div>
        </div>

      </div>
    </v-container>
  </template>

<script>
import LogisticRegressionResultPage from '@/logisticRegression/pages/LogisticRegressionResultPage.vue';

export default {
  components: {
    LogisticRegressionResultPage
  },

  data () {
    return {
      tab: 0
    }
  },
}
</script>