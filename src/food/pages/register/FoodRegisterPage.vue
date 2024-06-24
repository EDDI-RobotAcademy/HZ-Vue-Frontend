<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="foodName" label="음식 이름"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="foodType" label="음식 종류"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea v-model="foodDescription" label="음식 설명" auto-grow/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="foodPrice" label="음식 가격" type="number"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-file-input v-model="foodImage" label="음식 사진" prepend-icon="mdi-camera"/>
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

const foodModule = 'foodModule'

export default {
    data () {
        return {
            foodName: '',
            foodType: '',
            foodDescription: '',
            foodPrice: 0,
            foodImage: null,
            uploadedFileName: '',
        }
    },
    methods: {
        ...mapActions(foodModule, ['requestCreateFoodToDjango']),
        async onSubmit () {
            console.log('상품 등록 눌렀음')

            try {
                if (this.foodImage) {
                    const imageFormData = new FormData()
                    imageFormData.append('foodName', this.foodName)
                    imageFormData.append('foodType', this.foodType)
                    imageFormData.append('foodDescription', this.foodDescription)
                    imageFormData.append('foodPrice', this.foodPrice.toString())
                    imageFormData.append('foodImage', this.foodImage)

                    const response = await this.requestCreateFoodToDjango(imageFormData)
                    this.uploadedFileName = response.data.imageName
                    this.$router.push({ name: 'FoodListPage' })
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