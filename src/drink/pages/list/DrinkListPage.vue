<template lang="">
    <v-container>
        <h2>Drink List</h2>
        <div style="text-align: left; margin: 15px;">
            <router-link :to="{ name: 'DrinkRegisterPage' }">
                음료 등록
            </router-link>
        </div>
        <v-row v-if="drinkList.length > 0">
            <v-col v-for="(drink, index) in drinkList" :key=index cols="12" sm="6" md="4" lg="3">
                <v-card @click="goToDrinkReadPage(drink.drinkId)">
                    <v-img :src="getImageUrl(drink.drinkImage)" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                            <v-row class="fill-height ma-0" align="center" justify="center">
                                <v-progress-circular indeterminate color="grey lighten-5"/>
                            </v-row>
                        </template>
                    </v-img>
                    <v-card-title>{{ drink.drinkName }}</v-card-title>
                    <v-card-subtitle>{{ drink.drinkPrice }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-row v-else>
            <!-- Bootstrap 등에서 기본적으로 화면을 12개의 열로 구성함(전체 쓰겠단 소리) -->
            <v-col cols="12" class="text-center">
                <v-alert type="info">등록된 음료가 없습니다!</v-alert>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-img src="@/assets/images/fixed/waiting.png" aspect-ratio="1" class="grey lighten-2">
                    <template v-slot:placeholder>
                        <v-row class="fill-height ma-0" align="center" justify="center">
                            <v-progress-circular indeterminate color="grey lighten-5"/>
                        </v-row>
                    </template>
                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>

// npm install axios --legacy-peer-deps

<script>
// 이것은 vuex 때문에 사용 가능
import { mapActions, mapState } from 'vuex'

const drinkModule = 'drinkModule'

export default {
    components: {
        // RouterLink
    },
    computed: {
        ...mapState(drinkModule, ['drinkList']),
        pagedItems () {
            const startIdx = (this.pagination.page - 1) * this.perPage
            const endIdx = startIdx + this.perPage
            return this.drinkList.slice(startIdx, endIdx)
        }
    },
    mounted () {
        this.requestDrinkListToDjango()
    },
    methods: {
        ...mapActions(drinkModule, ['requestDrinkListToDjango']),
        getImageUrl (imageName) {
            return require('@/assets/images/uploadImages/' + imageName)
        },
        goToDrinkReadPage (drinkId) {
            this.$router.push({
                name: 'DrinkReadPage',
                params: { drinkId: drinkId }
            })
        }
    },
    data () {
        return {
            headerTitle: [
                {
                    title: 'No',
                    align: 'start',
                    sortable: true,
                    key: 'drinkId',
                },
                { title: '음료 이름', align: 'end', key: 'drinkName' },
                { title: '음료 가격', align: 'end', key: 'drinkPrice' },
            ],
            perPage: 5,
            pagination: {
                page: 1,
            }
        }
    }
}
</script>