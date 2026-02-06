<template>
    <table>
        <thead>
            <tr>
                <th>Filmtitel</th>
                <th>Utgivningsår</th>
                <th>Har sett</th>
                <th>Radera film</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="movie in movies" :movie="movie" :key="movie.id">
                <td>{{ movie.name }}</td>
                <td>{{ movie.year }}</td>
                <td>{{ movie.watched ? "Ja" : "Nej" }}</td>
                <td><button @click="removeMovie(movie.id)">Radera</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ["movies"],
    emits: ["deleteMovie"],
    methods: {
        //Method for deleting movie sent to view.
        removeMovie(id) {
            this.$emit("deleteMovie", id)
        }
    }
}
</script>

<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    font-family: Georgia, serif;
    border: 2px solid #000;
}

th {
    background-color: #800;
    color: #f1f1f1;
    padding: 4px;
    border-bottom: 2px solid #000;
}

tr {
    text-align: center;
}

tr:nth-child(even) {
    background-color: #88000088;
}

tr:hover,
tr:focus-within {
    background-color: #555;
    color: #f1f1f1;
}

td,
th {
    border-left: 1px solid;
}

button {
    font-weight: bold;
    text-align: center;
    background-color: #555;
    color: #f1f1f1;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 4px;
    padding: 5px 20px;
}

button:active,
button:hover {
    background-color: #800;
}
</style>
