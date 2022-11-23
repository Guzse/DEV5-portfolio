<template>
    <div class="app--wrapper">
        <VideoPlayer />
        <VideoDetails />
        <Chat />
        <CommentBox />
    </div>
</template>

<script>
import Chat from './components/Chat.vue';
import CommentBox from './components/CommentBox.vue';
import VideoDetails from './components/VideoDetails.vue';
import VideoPlayer from './components/VideoPlayer.vue';

export default {
    components: { VideoPlayer, VideoDetails, Chat, CommentBox }
}
</script>

<style lang="scss">
.app--wrapper {
    max-height: 100vh;

    display: grid;
    grid-template-columns: 8fr 4fr;
    grid-template-rows: 100px 1fr 60px;

    grid-template-areas:
        "video details"
        "video chat"
        "video comment";

    .player--wrapper {
        grid-area: video;
    }
    .details--wrapper {
        grid-area: details;
    }
    .chat--wrapper {
        grid-area: chat;
    }

}
</style>