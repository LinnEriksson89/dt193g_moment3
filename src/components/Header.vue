<template>
    <header>
        <h1>Linns Filmsida</h1>
        <div><Navigation /></div>
    </header>
</template>

<script setup>
import Navigation from "./Navigation.vue";
</script>

<style scoped>
header {
    height: 400px;
    margin: 0;
    background-image: url(/headerimage.png);
    background-repeat: no-repeat;
    position: relative;
}

h1 {
    font-size: 4em;
    font-weight: bold;
    font-family: Kalam, Arial, Helvetica, sans-serif;
    text-align: center;
    margin: 2%;
    position: absolute;
    top: 30%;
    width: 100%;
}

div {
    position: absolute;
    bottom: 10px;
    width: 100%;
}

</style>