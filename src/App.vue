<template>
    <div id="background">
        <div id="wrapper">
            <Header />
            <main>
                <router-view />
            </main>
            <Footer />
        </div>
    </div>
</template>

<script setup>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import { RouterView } from 'vue-router'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Flamenco:wght@300;400&family=Kalam:wght@300;400;700&display=swap');

#wrapper {
    max-width: 1000px;
    background-color: #f1f1f1;
    margin: auto;
    padding: 2%;
}

#background {
    background-color: #800;
    margin: 0;
    border: 1px solid #000;
    padding: 0;
}
</style>
