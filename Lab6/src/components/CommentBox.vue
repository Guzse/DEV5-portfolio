<template>
    <div class="comment-box--wrapper">
        <textarea placeholder="Comment..." v-model="comment" />
        <button @click="addComment">Comment</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let comment = ref('');
const event = new Event('comments:reload');

const addComment = () => {
    const apiUrl = 'https://lab5-p379.onrender.com/api/v1/messages/';
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: 'Gilian',
            text: comment.value,
        })
    })
    .then(() => {
        comment.value = '';
        document.dispatchEvent(event);
    });
}
</script>
<style lang="scss">
.comment-box--wrapper {
    background-color: #f5f5f5;
    padding: .5em;
    display: flex;

    textarea {
        flex: 1;
        border: none;
        padding: .5em;
        font-size: 1.2em;
    }
}
</style>