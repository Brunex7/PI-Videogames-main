const {
    getAllGamesBDDAPI,
    findById,
    createGame,
    searchByname,
} = require("../controllers/controlGame");
  
const getGamesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const result = name ? await searchByname(name) : await getAllGamesBDDAPI();
        if(result.length === 0) throw Error("No se encontro el juego")
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message});
    }
};
  
const getByIdHandler = async (req, res) => {
    const { id } = req.params;
    const source = isNaN(id) ? "bdd" : "api";
    try {
       const result = await findById(id, source);
       if(result.length === 0) throw Error("No se encontro el juego")
       res.status(200).send(result);
    } catch (error) {
       res.status(400).json({ error: error.message });
    }
};
   
const createGameHandler = async (req, res) => {
    const {name, background_image, description, released, genres, rating, platforms} = req.body;
    try {
      const newGame = await createGame(name, background_image, description, released, genres, rating, platforms)
       res.status(201).json(newGame)
    } catch (error) {
       res.status(400).json({ error: error.message });
    }
};
  
module.exports = {
    getGamesHandler,
    getByIdHandler,
    createGameHandler,
}