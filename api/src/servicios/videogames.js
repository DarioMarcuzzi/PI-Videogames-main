require('dotenv').config();

const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY} = process.env;


const getAllVideoGames = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    
    const dataNecesaria = response.data.results.map(e => {   
    return {
      id: e.id,
      name: e.name,
      released: e.released,
      image: e.background_image,
      rating: e.rating,
      ratingTop : e.rating_top,

    }
  })
  return dataNecesaria;
    
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllVideoGames
}
