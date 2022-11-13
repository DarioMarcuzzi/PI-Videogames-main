require('dotenv').config();

const axios = require('axios');
const { Videogame, Genre } = require('../db.js');
const { API_KEY} = process.env;


const getAllVideoGamesApi = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`);
    
    const dataNecesaria = response.data.results.map(e => {   
    return {
      id: e.id,
      name: e.name,
      released: e.released,
      image: e.background_image,
      rating: e.rating,
      plataforms : e.platforms.map(e => e.platform.name),
      genres: e.genres.map(e => e.name),

    }
  })
  return dataNecesaria;
    
  }
  catch (error) {
    console.log(error);
  }
}

const getPlatforms = async () => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/platforms?key=${API_KEY}`);
    const dataNecesaria = response.data.results.map(e => {
      return {
        id: e.id,
        name: e.name,
        image: e.image_background,
      }
    })
    return dataNecesaria;
  }
  catch (error) {
    console.log(error);
  }
}


const getAllVideoGamesDb = async () => {
  try {
    const response = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: [],
        }
      }
    });
    
    const dataNecesaria = response.map(e => {
      return {
        id: e.id,
        name: e.name,
        released: e.createdAt,
        image: e.image,
        rating: e.rating,
        ratingTop : e.ratingTop,
        platforms : e.platforms.split(','),
        genres: e.genres.map(e => e.name),
        createdInDb: true,
      }
    })
return dataNecesaria;
  }   
  catch (error) {
    console.log(error);
  }
}

const getVideogameByIdDb = async (id) => {
  try {
    const response = await Videogame.findOne({
      where: {
        id: id
      },
      include: {
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: [],
        }
      }
    });
    const dataNecesaria = {
      id: response.id,
      name: response.name,
      released: response.createdAt,
      description: response.description,
      image: response.image,
      rating: response.rating,
      ratingTop : response.ratingTop,
      plataforms : response.platforms.split(',').slice(0,-1),
      genres: response.genres.map(e => e.name),
      createdInDb: true,
    }
    return dataNecesaria;
  }
  catch (error) {
    console.log(error);
  }
}
const getVideogameByIdApi = async (id) => {
  try {
    const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`);
    console.log(response.data);
    const dataNecesaria = {
      id: response.data.id,
      name: response.data.name,
      description: response.data.description.replace(/(<([^>]+)>)/ig,""),
      released: response.data.released,
      image: response.data.background_image,
      rating: response.data.rating,
      plataforms : response.data.platforms.map(e => e.platform.name),
      genres: response.data.genres.map(e => e.name),
    }
    return dataNecesaria;
  }
  catch (error) {
    console.log(error);
  }
}

const getVideogamesByNameApiDb  = async (name) => {
  try {
    const responseDb = await Videogame.findAll({
      where: {
        name: name
      },
      include: {
        model: Genre,
        attributes: ['name'],
        through: {
          attributes: [],
        }
      }
    })
    if(responseDb.length > 0) {
      const dataNecesaria = responseDb.map(e => {
        return {
          id: e.id,
          name: e.name,
          released: e.createdAt,
          image: e.image,
          rating: e.rating,
          ratingTop : e.ratingTop,
          platforms : e.platforms.split(','),
          genres: e.genres.map(e => e.name),
          createdInDb: true,
        }
      })
      return dataNecesaria;
      

    } else {
      const responseApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`);
      const dataNecesaria = responseApi.data.results.map(e => {
        return {
          id: e.id,
          name: e.name,
          released: e.released,
          image: e.background_image,
          rating: e.rating,
          plataforms : e.platforms.map(e => e.platform.name),
          genres: e.genres.map(e => e.name),
        }
      }
      )
      return dataNecesaria;
    }
  }
  catch (error) {
    console.log(error);
  }
}


const getAllVideoGames = async () => {
  try {
    const responseApi = await getAllVideoGamesApi();
    const responseDb = await getAllVideoGamesDb();
    const response = responseApi.concat(responseDb);
    return response;
  }
  catch (error) {
    console.log(error);
  }
}




module.exports = {
  getAllVideoGames,
  getPlatforms,
  getVideogameByIdDb,
  getVideogameByIdApi,
  getVideogamesByNameApiDb
}
