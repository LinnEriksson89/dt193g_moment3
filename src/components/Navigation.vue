<template>
  <ul>
    <Navbutton title="Start" link="/" />
    <Navbutton title="Filmer" link="/movies" />
    <Navbutton title="Om Vue" link="/aboutvue" />
  </ul>
</template>

<script setup>
import Navbutton from "./Navbutton.vue";
</script>

<style scoped>
    ul {
        padding: 0;
        list-style: none;
        text-align: center;
    }
</style>
