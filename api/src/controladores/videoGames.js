const {Router} = require('express');
const { Videogame } = require('../db.js');
const { getAllVideoGames , getPlatforms,getVideogameByIdDb,getVideogameByIdApi,getVideogamesByNameApiDb } = require ('../servicios/videogames.js');




const router = Router();

router.get('/',async (req,res) =>{
  try{
    const {name} = req.query;
    if(name){
      const videoGamesByName = await getVideogamesByNameApiDb(name);
      if(videoGamesByName){
        return res.status(200).json(videoGamesByName);
      } else {
        return res.status(404).send('No se encontraron videojuegos con ese nombre');
      }
    }
    const  dataGetAllVideoGames = await getAllVideoGames();
    if(dataGetAllVideoGames){
      return res.status(200).json(dataGetAllVideoGames);
    } else {
      return res.status(404).send('No se encontraron videojuegos');
    }
  }
  catch(error){
    res.status(404).send(error);
  }
})
router.get('/platforms', async (req,res) =>{
  try{
    const platforms = await getPlatforms();
    res.status(200).json(platforms);
  }
  catch(error){
    res.status(404).send('No se encontraron plataformas');
  }
})

router.get('/:id', async (req,res) =>{
  try{
    const {id} = req.params;
    if(id.length > 12) {
      const videoGameDb = await getVideogameByIdDb(id);
      res.status(200).json(videoGameDb);
  
    } else {
      const videoGameApi = await getVideogameByIdApi(id);
      res.status(200).json(videoGameApi);
    } 

  }
  catch(error){
    res.status(404).send('No se encontró el videojuego');
  }
})




router.post('/create', async (req,res) =>{
  try{
    const {name, description,  image,rating, platforms, genre} = req.body;
   
    const newVideogame = await Videogame.create({
      name,
      description,
      platforms,
      rating,
      image,
      genre
    })

    await newVideogame.setGenres(genre);
    res.status(200).json(newVideogame);
  }
  catch(error){
    console.log(error)
    res.status(404).send(error);
  }
})


module.exports = router;