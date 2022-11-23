<template>
    <div class="player--wrapper">
        <a class="next" @click.prevent="nextVideo" href="#">⬇️</a>
        <video 
            controls 
            loop 
            autoplay 
            :class="animation"
            class="animate__animated"
            :src="videoSrc" />
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
let videos = reactive({data: []});
let videoSrc = ref("");
let counter = ref(0);
let animation = ref("");

onMounted(() => {
    let apiUrl = 'https://app.fakejson.com/q/yvU8gCd8?token=bpR5KBnfgwDtvvpeTnzkNw';
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            videoSrc.value = data.videos[0].video;
            videos.data = data.videos;
        })
        .catch(err => console.error(err));
})
const nextVideo = () => {
    counter.value++;
    if (counter.value > videos.data.length - 1) {
        counter.value = 0;
    }

    animation.value = "animate__fadeOutDown";
    setTimeout(() => {
        videoSrc.value = videos.data[counter.value].video;
        animation.value = "animate__fadeInDown";
    }, 650);
}
</script>
<style lang="scss">
.player--wrapper {
    background-image: url('/blur.png');
    background-size: cover;
    background-position: center;
    text-align: center;

    video {
        height: 100vh;
        aspect-ratio: 9/16;
    }
    
    a.next {
        font-size: 36px;
        position: absolute;
        top: 50%;
        left: 1em;
    }
}
</style>