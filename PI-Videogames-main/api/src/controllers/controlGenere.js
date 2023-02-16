const axios = require("axios");
const { Genere } = require("../db");
const { API_KEY } = process.env;

const getGenres = async () => {
  const genresUrl = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  const genresAPI = await genresUrl.data.results.map((g) => g.name);
  genresAPI.forEach((g) => {
    Genere.findOrCreate({ where: { name: g } });
  });

  let genresDb = await Genere.findAll();
  return genresDb;
};

module.exports = { getGenres };