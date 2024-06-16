<template>
    <div class="homeView">
     <p>여기는 메인페이지 입니다 네비바에서 회원가입 및 로그인을 합니다</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'HomeView',
  
    components: {
    },
  });
  </script>

<style scoped>
.homeView {
  background-color: rgb(33, 33, 33); /* 배경색을 검은색으로 설정 */
  color: white; /* 텍스트 색상을 흰색으로 설정 */
  height: 100vh; /* 전체 화면 높이로 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('C:\TeamProject\SK-Networks-AI-1\HZ\HZ-Vue-Frontend\HZ-Vue-Frontend\project\src\assets\background_image\main_image.png'); /* 배경 이미지 설정 */
  background-size: cover; /* 이미지가 컨테이너에 맞게 조정되도록 설정 */
  background-position: center; /* 이미지를 가운데 정렬 */
}
</style>