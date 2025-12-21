<template>
    <p v-if="isLoading">Tabellen håller på att läsas in.</p>
    <p v-if="error">{{ errorMessage }}</p>
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
                <td><button @click="deleteMovie(movie.id)">Radera</button></td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
            isLoading: false,
            error: false,
            errorMessage: ""
        };
    },
    methods: {
        //Get all movies with fetch
        async getMovies() {
            //Set loading variable to true so info is posted while loading.
            this.isLoading = true;
            try {
                //Fetch data, turn response to json, add in movies-array, turn loading of.
                const response = await fetch("http://localhost:8000/api/movie/");
                const data = await response.json();
                this.movies = data;
                this.isLoading = false;

            } catch (error) {
                this.error = true,
                    this.errorMessage = "Tabellen kunde inte hämtas.";

            }
        },
        //Make the delete-button work.
        deleteMovie(movieId) {
            //Create url from the id of the movie
            let url = "http://localhost:8000/api/movie/" + movieId;

            //Use fetch with delete and then run getMovies again.
            fetch(url,
                {
                    method: "DELETE"
                }
            )
                .then(this.getMovies())
        }
    },
    mounted() {
        //Run getMovies when page has loaded.
        this.getMovies();
    },
};
</script>

<style scoped>
p {
    border: 2px solid #800;
    padding: 2%;
}

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

td, th {
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
