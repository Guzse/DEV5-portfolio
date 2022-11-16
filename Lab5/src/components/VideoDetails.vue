<template>
    <div class="details--wrapper">
        <h3>{{ username }}</h3>
        <p>{{ description }}</p>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
let username = ref("");
let description = ref("");

onMounted(() => {
    const apiUrl = 'https://app.fakejson.com/q/yvU8gCd8?token=bpR5KBnfgwDtvvpeTnzkNw';
    fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            username.value = data.videos[0].username;
            description.value = data.videos[0].description;
        })
        .catch(err => console.error(err));
});
</script>
<style lang="scss">
.details--wrapper {
    padding: 0.5rem;
    
    h3, p {
        margin: 0;
    }
}
</style>