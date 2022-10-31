const app = require('./config/server');
const dbCOn = require('./config/dbConnection');
const routes = require('./app/routes');

routes.getMovies(app);
routes.addMovie(app);
routes.deleteMovie(app);
routes.updateMovie(app);

module.exports = app; //para os testes funcionarem