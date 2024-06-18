<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieName" label="영화 이름"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieReleaseDate" label="영화 개봉일"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieFilmRating" label="영상물 등급"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieGenre" label="영화 장르"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieCountry" label="영화 제작 국가"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="movieRunningTime" label="영화 상영 시간"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea v-model="movieSummary" label="영화 줄거리" auto-grow/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-text-field v-model="moviePrice" label="영화 가격" type="number"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-file-input v-model="movieImage" label="영화 포스터" prepend-icon="mdi-camera"/>
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

const movieModule = 'movieModule'

export default {
    data () {
        return {
            movieName: '',
            movieReleaseDate: '',
            movieFilmRating: '',
            movieGenre: '',
            movieCountry: '',
            movieRunningTime: '',
            movieSummary: '',
            moviePrice: 0,
            movieImage: null,
            uploadedFileName: '',
        }
    },
    methods: {
        ...mapActions(movieModule, ['requestCreateMovieToDjango']),
        async onSubmit () {
            console.log('상품 등록 눌렀음')

            try {
                if (this.movieImage) {
                    const imageFormData = new FormData()
                    imageFormData.append('movieName', this.movieName)
                    imageFormData.append('movieReleaseDate', this.movieReleaseDate)
                    imageFormData.append('movieFilmRating', this.movieFilmRating)
                    imageFormData.append('movieGenre', this.movieGenre)
                    imageFormData.append('movieCountry', this.movieCountry)
                    imageFormData.append('movieRunningTime', this.movieRunningTime)
                    imageFormData.append('movieSummary', this.movieSummary)
                    imageFormData.append('moviePrice', this.moviePrice.toString())
                    imageFormData.append('movieImage', this.movieImage)

                    const response = await this.requestCreateMovieToDjango(imageFormData)
                    this.uploadedFileName = response.data.imageName
                    this.$router.push({ name: 'MovieListPage' })
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