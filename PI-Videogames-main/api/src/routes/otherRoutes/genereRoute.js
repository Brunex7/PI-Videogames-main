const {Router} = require('express');
const { getGenresHandler } = require("../../handlers/handlerGenere");

const genreRouter = Router();


genreRouter.get("/", getGenresHandler);

module.exports = genreRouter;
