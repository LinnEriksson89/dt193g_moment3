<template>
    <form v-on:submit.prevent="createMovie">
        <fieldset>
            <legend>Lägg till en film:</legend>
            <label for="title">Filmtitel:</label>
            <input type="text" name="title" id="title" maxlength="128" size="60" required v-model="movieName" />
            <br />

            <label for="year">Utgivningsår:</label>
            <input type="number" name="year" id="year" minlength="4" maxlength="4" size="4" min="1800" max="3000"
                value="2000" required v-model="movieYear" />
            <br />

            <label for="watched">Har sett:</label>
            <input type="checkbox" name="watched" id="watched" v-model="movieWatched" />
            <br />

            <div class="buttons">
                <input type="reset" value="Rensa" class="button" />
                <input type="submit" value="Skicka" class="button" />
            </div>
        </fieldset>
    </form>
</template>

<script>

export default {
    data() {
        return {
            movieName: "",
            movieYear: 0,
            movieWatched: false,
        }
    },
    emits: ["addMovie"],
    methods: {
        //Create movie to send to view
        createMovie() {
            const newMovie = {
                name: this.movieName,
                year: this.movieYear,
                watched: this.movieWatched,
            }

            //Use emit to send data to the view.
            this.$emit("addMovie", newMovie);

            //Reset form
            this.movieName = "";
            this.movieYear = 0;
            this.movieWatched = false;
        },
    }
}
</script>

<style scoped>
form {
    font-family: Georgia, serif;
    margin: 2%;
}

fieldset {
    border: 2px solid #000;
}

legend {
    font-weight: bold;
    padding: 10px;
}

input {
    padding: 1%;
    margin: 2%;
}

.button {
    font-weight: bold;
    text-align: center;
    background-color: #555;
    color: #f1f1f1;
    border: 1px solid #000;
    border-radius: 10px;
    margin: 4px;
    padding: 5px 20px;
}

.button:active,
.button:hover {
    background-color: #800;
}

div.buttons {
    text-align: right;
}
</style>
