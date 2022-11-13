const axios = require('axios');
const { API_KEY } = process.env;
const { Genre } = require('../db.js');

const carryGenreDb = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = response.data.results.map((genre) => {
      return {
        name: genre.name,
      };
    });

    const genresDb = await Genre.findAll();

    if(genresDb.length === 0){
      const genresDb = await Genre.bulkCreate(genres);
    return genresDb;
    } else {
      return genresDb;
    }
    
  }
  catch (error) {
    console.log(error);
  }
}


module.exports ={
  carryGenreDb
}