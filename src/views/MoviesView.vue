<template>
    <h2>Filmer</h2>
    <p>
        Här finns det en tabell med filmer. Man kan lägga till nya filmer med hjälp
        av formuläret under tabellen.
    </p>
    <p v-if="isLoading">Tabellen håller på att läsas in.</p>
    <p class="error" v-if="error">{{ errorMessage }}</p>

    <MovieTable :movies="movies" @deleteMovie="deleteMovie" />
    <MovieForm @addMovie="addMovie" />

</template>

<script>
import MovieForm from "../components/MovieForm.vue";
import MovieTable from "../components/MovieTable.vue";

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
                if (response.ok) {
                    const data = await response.json();
                    this.movies = data;
                    this.isLoading = false;
                    console.log(this.movies);
                }

            } catch (err) {
                console.log(err);
                this.error = true;
                this.errorMessage = "Tabellen kunde inte hämtas.";

            }
        },
        //Make the delete-button work.
        async deleteMovie(movieId) {
            try {
                //Create url from the id of the movie
                let url = "http://localhost:8000/api/movie/" + movieId;

                //Use fetch with delete and then run getMovies again.
                const response = await fetch(url,
                    {
                        method: "DELETE"
                    }
                )

                if (response.ok) {
                    this.getMovies();
                }

                if (!response.ok) {
                    this.error = true,
                    this.errorMessage = "Filmen kunde inte raderas.";
                }

            } catch (err) {
                this.error = true,
                this.errorMessage = "Filmen kunde inte raderas.";
                console.log(err);
            }
        },
        //Add a movie with fetch
        async addMovie(newMovie) {
            try {
                //Add movie with fetch and post.
                const response = await fetch("http://localhost:8000/api/movie/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newMovie),
                })

                //If fetch doesn't work show error.
                if (!response.ok) {
                    this.error = true,
                    this.errorMessage = "Filmen kunde inte läggas till.";
                }

                //Reload table.
                await this.getMovies();
            } catch (err) {
                this.error = true,
                this.errorMessage = "Filmen kunde inte läggas till.";
                console.log(err);
            }
        }
    },
    mounted() {
        //Run getMovies when page has loaded.
        this.getMovies();
    },
    components: {
        MovieForm,
        MovieTable
    }
}
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

    & .error {
        border: 2px solid #800;
        padding: 2%;
    }
}
</style>
