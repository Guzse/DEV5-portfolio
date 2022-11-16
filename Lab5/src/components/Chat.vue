<template>
    <div class="chat--wrapper" ref="chatbox">
        <Comment v-for="comment in comments.data"
            :key="comment._id"
            :name="comment.user"
            :comment="comment.text"
            :picture="`https://avatars.dicebear.com/api/miniavs/${comment.user}.svg`" />
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import Comment from './Comment.vue';

let comments = reactive({data: []});
let chatbox = ref(null);

const fetchComments = () => {
    const apiUrl = 'https://lab5-p379.onrender.com/api/v1/messages/';
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            comments.data = data.reverse();
            console.log(chatbox.value);
        })
        .catch(err => console.error(err));
}

onMounted(fetchComments);
document.addEventListener('comments:reload', fetchComments);
</script>
<style lang="scss">
    .chat--wrapper {
        background-color: #f5f5f5;
        padding: .5em;
        overflow-y: scroll;
    }
</style>