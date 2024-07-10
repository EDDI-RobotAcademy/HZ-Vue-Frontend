<template>
    <v-dialog v-bind="$attrs" persistent width="auto">
        <v-card
            width="calc(100vw - 64px)"
            height="calc(100vh - 64px)"
            :style="{
                background: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${getImageUrl(
                    movie.movieImage
                )})`,
            }"
        >
            <div class="card-contents-wrapper">
                <div class="button-box">
                    <v-btn
                        icon="mdi-window-close"
                        size="large"
                        @click.stop="$emit('close')"
                    ></v-btn>
                </div>

                <div class="contents-box">
                    <div class="contents-left">
                        <div>
                            <p>
                                <span class="mdi mdi-star"></span>
                                {{ movie.movieFilmRating }}
                            </p>
                            <p>{{ movie.movieName }}</p>
                            <p>{{ movie.movieGenre }}</p>
                        </div>

                        <div>
                            <v-btn
                                icon="mdi-play mdi-48px"
                                size="x-large"
                            ></v-btn>
                            <p>재생하기</p>
                        </div>

                        <div>{{ omitContents(movie.movieSummary) }}</div>
                    </div>

                    <div class="contents-right">
                        <div>
                            <img
                                :src="getImageUrl(movie.movieImage)"
                                width="100%"
                                height="100%"
                            />
                        </div>

                        <div>
                            <div>
                                <p>출시</p>
                                <p>{{ movie.movieReleaseDate }}</p>
                            </div>
                            <div>
                                <p>시간</p>
                                <p>{{ movie.movieRunningTime }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: {
        movie: {
            type: Object,
            required: true,
        },
    },

    data() {
        return {};
    },

    methods: {
        getImageUrl(imageName) {
            return require(`@/assets/images/uploadImages/${imageName}`);
        },

        omitContents(contents) {
            if (contents.length > 240) {
                contents = contents.substr(0, 240) + "...";
            }

            return contents;
        },
    },
};
</script>

<style scoped>
.v-card {
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: top center !important;
}

.card-contents-wrapper {
    height: 100%;
    padding: 16px;
}

.button-box {
    display: flex;
    justify-content: flex-end;
}

.button-box .v-btn {
    color: #fff;
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4));
}

.contents-box {
    height: calc(100% - 168px);
    display: flex;
    padding-top: 80px;
    color: #fff;
}

.contents-left {
    max-width: 65%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}

.contents-left > div:first-of-type {
    display: flex;
    flex-direction: column;
}

.contents-left > div:first-of-type > p:first-child {
    display: flex;
    width: 60px;
    padding: 6px;
    margin-bottom: 20px;
    border-radius: 8px;
    font-size: 18px;
    background: linear-gradient(
        rgba(255, 255, 255, 0.15),
        rgba(255, 255, 255, 0.15)
    );
}

.contents-left > div:first-child > p:nth-child(2) {
    font-size: 60px;
    font-weight: bold;
}

.contents-left > div:first-child > p:nth-child(3) {
    margin-bottom: 120px;
    font-size: 18px;
    color: #bdbdbd;
}

.contents-left > div:nth-child(2) {
    display: flex;
    align-items: center;
}

.contents-left > div:nth-child(2) > .v-btn {
    color: #000;
    margin-right: 12px;
}

.contents-left > div:nth-child(2) > p:first-of-type {
    font-size: 36px;
    font-weight: bold;
}

.contents-left > div:nth-child(3) {
    font-size: 18px;
}

.contents-right {
    width: calc(35% - 32px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-end;
}

.contents-right > div:first-of-type {
    width: 300px;
    height: 420px;
}

.contents-right > div:first-of-type > img:first-of-type {
    object-fit: fill;
}

.contents-right > div:nth-of-type(2) > div:first-of-type,
.contents-right > div:nth-of-type(2) > div:nth-of-type(2) {
    width: 300px;
    display: flex;
    font-size: 18px;
}

.contents-right > div:nth-of-type(2) > div:first-of-type > p:first-of-type,
.contents-right > div:nth-of-type(2) > div:nth-of-type(2) > p:first-of-type {
    margin-right: 36px;
    font-weight: bold;
}
</style>
