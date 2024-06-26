<template>
    <div class="wrapper">
        <video-player
            :src="video.src"
            :poster="video.poster"
            controls
            autoplay
            muted
            :fill="true"
            :loop="true"
        />
    </div>
</template>

<script>
import { VideoPlayer } from "@videojs-player/vue";
import "video.js/dist/video-js.css";

export default {
    data: () => ({
        video: {
            src: require("@/assets/videos/sample_video.mp4"),
            poster: require("@/assets/images/fixed/movie08.png"),
        },
    }),

    components: {
        VideoPlayer,
    },
};
</script>

<style scoped>
.wrapper {
    height: calc(100vh - 64px);
    background-color: #151515;
}
</style>
