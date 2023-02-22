const {Router} = require('express');
const { 
    getGamesHandlerId,
    createGamesHandler,
    getGamesHandler 
} = require('');
const routeVgames = Router();

routeVgames.get("/", getGamesHandler);

routeVgames.get("/:id ", getGamesHandlerId);

routeVgames.post("/", createGamesHandler);


module.exports = routeVgames;