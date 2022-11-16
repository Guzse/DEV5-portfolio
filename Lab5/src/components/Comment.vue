<template>
    <div class="comment--wrapper">
        <img :src="props.picture" :alt="props.name" />
        <div class="comment--content">
            <h3>{{ props.name }}</h3>
            <p>{{ props.comment }}</p>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';
let props = defineProps(['name', 'comment', 'picture']);
</script>

<style lang="scss">
.comment--wrapper {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    background-color: #fff;
    margin-bottom: .5em;
    h3, p {
        margin: 0;
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        margin-right: 1rem;
    }
}
</style>