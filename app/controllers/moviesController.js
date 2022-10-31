const Joi = require('joi');
const Movie = require ("../models/movieModel");

const schema = Joi.object().keys({
  name: Joi.string().required().min(1).max(50),
  director: Joi.string().required().min(1).max(50),
  link: Joi.string().required().min(1).max(150)
});

module.exports = class Movies {
    static async apiGetAllMovies(req, res, next){
        console.log('Controller Movies - get movies');
         try {
           const movies = await Movie.getAllMovies();
           if(!movies){
              res.status(404).json(`Não existe filme cadastrado.`);
           }
           movies.forEach(movie => {
            console.log(`[Movie controller: retorno do banco] ${movie.name}`);
           })
           res.status(200).json(movies);

         } catch (error) {
           console.log(`[getallmovies error] ${error}`);
           res.status(500).json({error: error})
        }
    }

    static async addMovie(req, res, next) {
      console.log('[Add Movie Controller]', req.body);
      const { error, value } = schema.validate(req.body);
      if (error) {
        const result = {
           msg: 'Filme não incluído. Campos não foram preenchidos corretamente.',
           error: error.details
        }
        res.status(404).json(result);
        return;
     }      
      try {
         const addedMovie = await Movie.addMovie(req.body);
         res.status(200).json(addedMovie);
      } catch (error) {
         res.status(500).json({ error: error });
      }
   }

   static async deleteMovie(req, res, next) {
    console.log(req.params.id);
    
    const data = await Movie.deleteMovies(req.params.id); 
    res.status(200).json(data);
    //res.send("teste delete");

   }

   static async updateMovie(req, res, next) {
      console.log(req.params.id);
      
      const data = await Movie.updateMovies(req.params.id); 
      res.status(200).json(data);
      //res.send("teste delete");
  
     }
}