const Movies = require("../app/controllers/moviesController")

module.exports = {
	getMovies: (app) => {
        console.log(`[Routes] get movies`)
        app.get('/api/filmes', Movies.apiGetAllMovies);
      },

      addMovie: (app) => {
        console.log('[Routes] add movie')
        app.post('/api/filmes', Movies.addMovie);
      },

      deleteMovie: (app) => {
        console.log('[Routes] delete movie')
        app.delete('/api/filmes/:id', Movies.deleteMovie);
      },

      updateMovie: (app) => {
        console.log('[Routes] update movie')
        app.post('/api/filmes/:id', Movies.updateMovie);
      },
}   
    