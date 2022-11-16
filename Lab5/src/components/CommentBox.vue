<template>
    <div class="comment-box--wrapper">
        <textarea placeholder="Add a public comment..." v-model="comment" />
        <button @click="addComment">Comment</button>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue';

</script>
<style lang="scss">
    .comment-box--wrapper {
        background-color: #f5f5f5;
        padding: .5em;
        display: flex;

        textarea {
            font-size: 1em;
            resize: none;
            border: none;
            outline: none;
            background-color: #ffffff;
            padding: .5em;
            border-radius: 1.2em;
            margin-right: .5em;
        }

        button {
            font-size: 1em;
            border: none;
            outline: none;
            background-color: #ff00a2;
            color: #ffffff;
            padding: .5em 1em;
            border-radius: 1.2em;
        }
    }
</style>