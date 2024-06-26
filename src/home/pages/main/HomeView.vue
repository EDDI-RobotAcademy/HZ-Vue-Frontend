<template>
    <main-1-page />
    <main-2-page />
    <main-3-page />
    <main-4-page />
    <main-5-page />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main1Page from "../main1/Main1Page.vue";
import Main2Page from "../main2/Main2Page.vue";
import Main3Page from "../main3/Main3Page.vue";
import Main4Page from "../main4/Main4Page.vue";
import Main5Page from "../main5/Main5Page.vue";

export default defineComponent({
    name: "HomeView",

    components: { Main1Page, Main2Page, Main3Page, Main4Page, Main5Page },
});
</script>

<style scoped>
div {
    height: calc(100vh - 64px);
}
</style>
