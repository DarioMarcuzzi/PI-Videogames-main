const {Router} = require('express');
const { Videogame } = require('../db.js');
const { getAllVideoGames } = require ('../servicios/videogames.js');




const router = Router();

router.get('/',async (req,res) =>{
  try{
    const {name} = req.query;
    if(name){
      const videoGamesByName = await getVideogamesByName(name);
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



router.post('/createVideoGame', async (req,res) =>{
  try{
    const {name,description,platforms,releaseDate,rating,Image} = req.body;
    const videoGame = await Videogame.create({
      name,
      description,
      platforms,
      releaseDate,
      rating,
      Image
    })
    return res.status(200).json(videoGame);
  }
  catch(err){
    return res.status(404).send('No se pudo crear el videojuego');
  }

})

module.exports = router;