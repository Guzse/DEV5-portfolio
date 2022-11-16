<template>
    <div class="chat--wrapper">
        <div class="messages--wrapper">
            <Comment v-for="comment in comments.data" :key="comment._id" :name="comment.user" :comment="comment.text"
                :picture="`https://avatars.dicebear.com/api/miniavs/${comment.user}.svg`" />
        </div>
        
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';
import Comment from './Comment.vue';

let comments = reactive({ data: [] });

onMounted(() => {
    const apiUrl = 'https://lab5-p379.onrender.com/api/v1/messages/';
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            comments.data = data;
        })
        .catch(err => console.error(err));
});


</script>
<style lang="scss">
.messages--wrapper {
    background-color: #f5f5f5;
    padding: .5em;
    overflow-y: scroll;
}
</style>