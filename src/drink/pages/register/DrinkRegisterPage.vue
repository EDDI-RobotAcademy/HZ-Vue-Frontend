<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="drinkName" label="음료 이름"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="drinkType" label="음료 종류"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea v-model="drinkDescription" label="음료 설명" auto-grow/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="drinkPrice" label="음료 가격" type="number"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-file-input v-model="drinkImage" label="음료 사진" prepend-icon="mdi-camera"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <p v-if="uploadedFileName">업로드된 파일: {{ uploadedFileName }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-right">
                <v-btn class="ml-2" color="primary" @click="onSubmit">작성 완료</v-btn>
                <v-btn class="ml-1" color="error" @click="onCancel">취소</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex'

const drinkModule = 'drinkModule'

export default {
    data () {
        return {
            drinkName: '',
            drinkType: '',
            drinkDescription: '',
            drinkPrice: 0,
            drinkImage: null,
            uploadedFileName: '',
        }
    },
    methods: {
        ...mapActions(drinkModule, ['requestCreateDrinkToDjango']),
        async onSubmit () {
            console.log('상품 등록 눌렀음')

            try {
                if (this.drinkImage) {
                    const imageFormData = new FormData()
                    imageFormData.append('drinkName', this.drinkName)
                    imageFormData.append('drinkType', this.drinkType)
                    imageFormData.append('drinkDescription', this.drinkDescription)
                    imageFormData.append('drinkPrice', this.drinkPrice.toString())
                    imageFormData.append('drinkImage', this.drinkImage)

                    const response = await this.requestCreateDrinkToDjango(imageFormData)
                    this.uploadedFileName = response.data.imageName
                    this.$router.push({ name: 'DrinkListPage' })
                } else {
                    console.log('이미지 파일을 선택하세요!')
                }
            } catch (error) {
                console.log('파일 처리 과정에서 에러 발생:', error)
            }
            // 상품 상세 정보 읽기
        },
        async onCancel () {
            console.log('취소 버튼 눌럿음')
            // '이전 routing 경로로 이동해줘' 를 의미함
            this.$router.go(-1)
        }
    }
}
</script>