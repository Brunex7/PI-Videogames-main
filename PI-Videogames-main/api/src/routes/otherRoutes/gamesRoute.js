const { Router } = require("express");
const  {
    getGamesHandler,
    getByIdHandler,
    createGameHandler,
} = require("../../handlers/handlerGame")
const validate  = require('./validate');

const gamesRouter = Router();

gamesRouter.get("/", getGamesHandler);

gamesRouter.get("/:id", getByIdHandler);

gamesRouter.post("/", validate, createGameHandler);


module.exports = gamesRouter;