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
  background-color: rgb(33, 33, 33); 
  color: white; 
  height: 100vh; 
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('C:\TeamProject\SK-Networks-AI-1\HZ\HZ-Vue-Frontend\src\assets\background_image\main_image.png'); 
  background-size: cover; 
  background-position: center; 
}
</style>