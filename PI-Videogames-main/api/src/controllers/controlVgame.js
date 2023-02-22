const axios = require('axios')
const {Videogames, Genere} = require('../db')
const {API_KEY} = process.env;

const cleanArr = (arr) =>
    arr.data.results.map((e)=>{
        return{
            id: e.id,
            name: e.title,
            image: e.image,
            description: e.description,
            released: e.released,
            rating: e.rating,
            generes: e.generes.map((genere) => genere.name),
            platforms: e.platforms,
            create: false,
        };
    });

const getApiGames = async () => {
    const apiUrl = await axios.get(
        `https://api.rawg.io/api/games?apiKey=${API_KEY}`
    );
    const apiInfo = cleanArr(apiUrl)
    return apiInfo;
};

const getDbGames = async () => {
    return await Videogames.findAll({
        include: {
            model: Genere,
            attributes: ["name"],
            through: {
                attributes: [],
            },
        },
    });
};

const getAllGames = async () =>{
    const apiInfo = await getApiGames();
    const dbInfo = await getDbGames();
    const totalInfo = [...dbInfo, ...apiInfo];
    return totalInfo;
};

const searchGameByName = async (name) => {
    const dbGames = await Videogames.findAll({ where: { name: name }})
    const apiUrl = await axios.get(
        `https://api.rawg.io/api/games?apiKey=${API_KEY}`
    );
    const apiInfo = cleanArr(apiUrl)
    
    const filterApi = apiInfo.filter((e)=> e.name.toLowerCase().includes(name.toLowerCase()));
    return [ ...filterApi, ...dbGames];
}

const createGame = async (name, description, platforms, image, released, ranting, genere) =>
    await Videogames.create({name, description, platforms, image, released, ranting, genere}
);

const getGameById = async (id, source) =>{
    const game = 
    source === "api" 
        ? (await axios.get(`https://api.rawg.io/api/games/${id}?apiKey=${API_KEY}`)).data
        : await Videogames.findByPk(id);
    return game;
};

module.exports = { 
    createGame,
    getGameById, 
    getAllGames, 
    searchGameByName,
};