const client = require("../../config/dbConnection");
const { response } = require("../../config/server");
const { ObjectId } = require("mongodb");

module.exports = class MoviesModel {
    
    static async getAllMovies(){

        console.log(`[Get Movies Model]`);
        const cursor = await client.db("dsw").collection("movies").find();
        const movies = await cursor.toArray();
        console.log('[Movies model]')
        return movies;
    }

    static async addMovie(data) {
        console.log(`[Movie Model - Add Movie] ${data}`);
        try {
            const newMovie = { name: data.name, director: data.director, link: data.link,
                date: new Date()
            }
            const addedMovie = await client.db("dsw").collection("movies").insertOne(newMovie);
            console.log(`New movie inserted with the following id ${addedMovie.insertedId}`);
            return addedMovie;
        } catch (error) {
            console.log(`[movieService] Error: ${error}`);
        } 
    }
        static async deleteMovies(data) {
            console.log(`[Movie Model - Delete Movie] ${data}`);
            const query = {_id: new ObjectId(data)};
            const deleteMovie = await client.db("dsw").collection("movies").deleteOne(query);
            return deleteMovie;
        }

        static async updateMovie(data) {
            console.log(`[Movie Model - Update Movie] ${data}`);
            try {
                const newMovie = { name: data.name, director: data.director, link: data.link,
                    date: new Date()
                }
                const queryUpdate = {_id: new ObjectId(data)};
                const addedMovie = await client.db("dsw").collection("movies").updateOne(queryUpdate);
                console.log(`Movie atualizado ${addedMovie.insertedId}`);
                return addedMovie;
            } catch (error) {
                console.log(`[movieService] Error: ${error}`);
            } 
        }
    }
