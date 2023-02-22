const {Router} = require('express');
const routeGenere = Router();
const {getGenereHandler} = require ('../../handlers/handlerGenere');


routeGenere.get("/",getGenereHandler);

module.exports = routeGenere;