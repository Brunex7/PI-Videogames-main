const {
    createGame,
    getGameById, 
    getAllGames, 
    searchGameByName,
} = require('../controllers/controlVgame');

const getGamesHandler = async (req, res) =>{
    const {name} = req.query;
    const results = name ? await searchGameByName(name) : await getAllGames();

    res.status(200).json(results);
};

const getGamesHandlerId = async (req, res) =>{
    const {id} = req.params;
    const source = isNaN(id) ? 'bdd' : 'api';

    try {
        const games = await getGameById(id, source);
        res.status(200).json(games);
    } catch (error) {
        res.status(400).json({error: error.messege})
    }
};

const createGamesHandler = async ( req, res) => {
    try {
        const {name, description, platforms, image, released, ranting, genere} = req.body;
        const newGame = await createGame(name, description, platforms, image, released, ranting, genere);
        res.status(201).json("Successfully Created");
    } catch (error) {
        res.status(400).json({error: error.messege})
    }
};

module.exports = {
    getGamesHandlerId,
    createGamesHandler,
    getGamesHandler
};