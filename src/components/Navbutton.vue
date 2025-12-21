<template>
  <a v-bind:href="props.link" :class="{ active: isActive}">
    <li>{{ props.title }}</li>
  </a>
</template>

<script setup>
const props = defineProps(["title", "link"]);
</script>

<style scoped>
    a {
        font-weight: bold;
        text-decoration: none;
        text-align: center;
        color: #f1f1f1;
        background-color: #800;
        display: inline-block;
        border: 2px solid #f1f1f1;
        border-radius: 10px;
        margin: 4px;
        padding: 10px 45px;

        &:visited {
            color: #f1f1f1;
        }

        &:hover,
        &:active {
            background-color: #f1f1f1;
            color: #800;
            border: 2px solid #800;
        }
    }
</style>
