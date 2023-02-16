const axios = require("axios");
const { Videogame, Genere} = require("../db");
const { API_KEY } = process.env;

const cleanA = (games) => 
    games.data.results.map((game) => {
        return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            genres: game.genres?.map((g) => g.name),
            released: game.released,
            rating: game.rating,
            platform: game.platforms?.map((p) => p.platform.name),
            created: false,
        };
    })
;

// - - - - - - - - - - - - - - - - - - - - TRAER TODOS LOS JUEGOS - - - - - - - - - - - - - - - - - - - -

const getAllAPI = async () => {
    const allApi = await axios.get(
      `https://api.rawg.io/api/games?key=${API_KEY}`
    );
    const filterApi = cleanA(allApi);
    return filterApi;
};

const getAllBDD = async () => {
  const allGames = await Videogame.findAll({
    include: [
      {
        model: Genere,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    ],
  });
  return allGames;
};

const getAllGamesBDDAPI = async () => {
  const fromAPI = await getAllAPI();
  const fromBDD = await getAllBDD();
  const BDDAPI = [...fromAPI, ...fromBDD];
  return BDDAPI;
};

// - - - - - - - - - - - - - - - - - - - - BUSCAR POR NOMBRE - - - - - - - - - - - - - - - - - - - -

const searchByname = async (name) => {
    const dbGames = await Videogame.findAll({where:{name: name}})
    const api = await axios.get(
        `https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`
    );
    const infoApi = cleanA(api);
    return [...dbGames, ...infoApi];
};

// - - - - - - - - - - - - - - - - - - - - BUSCAR POR ID - - - - - - - - - - - - - - - - - - - -

const findById = async (id, source) => {
  const result =
    source === "api" 
    ? (await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)).data
    : await Videogame.findByPk(id);
  return result;
};

// - - - - - - - - - - - - - - - - - - - - CREAR NUEVO JUEGO - - - - - - - - - - - - - - - - - - - -

const createGame = async (name, background_image, description, released, genres, rating, platforms) => {
  const api = await getAllAPI();
  const apiFilter = api.filter((game) => game.name === name);
  if (apiFilter.length !== 0) throw Error("Ya existe un juego con ese nombre");
  const createGame = await Videogame.create({name, background_image, description, released, rating, platforms,});

  const genreBDD = await Genere.findAll({
    where: {
      name: genres,
    },
  });

  createGame.addGenre(genreBDD);
  return createGame;
};

module.exports = {
  searchByname,
  getAllGamesBDDAPI,
  findById,
  createGame,
};