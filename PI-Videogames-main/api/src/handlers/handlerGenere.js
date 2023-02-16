const { getGenres } = require('../controllers/controlGenere')

const getGenresHandler = async (req, res) => {
    const result = await getGenres();
    res.status(200).send(result)
};

module.exports = {getGenresHandler};