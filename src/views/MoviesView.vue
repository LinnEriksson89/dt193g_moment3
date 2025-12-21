<template>
    <h2>Filmer</h2>
    <p>
        Här finns det en tabell med filmer. Man kan lägga till nya filmer med hjälp
        av formuläret under tabellen.
    </p>
    <MovieTable />
    <MovieForm />
</template>

<script setup>
import MovieForm from "../components/MovieForm.vue";
import MovieTable from "../components/MovieTable.vue";

</script>

<style scoped>
h2 {
    font-size: 1.6em;
    font-weight: bold;
    font-family: Kalam, Arial, Helvetica, sans-serif;
    margin: 2%;
    border-bottom: #800 2px solid;
}

p {
    font-family: Georgia, serif;
    line-height: 1.6;
    margin: 2%;
    max-width: 600px;
}
</style>
