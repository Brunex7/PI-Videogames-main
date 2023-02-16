const { Router } = require('express');
const gamesRoute = require('./otherRoutes/GamesRoute');
const genreRoute = require('./otherRoutes/genereRoute');


const mainRouter = Router();

mainRouter.use('/games', gamesRoute);
mainRouter.use('/genres', genreRoute);

module.exports = mainRouter;
