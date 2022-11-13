let { Router } = require('express');

const {carryGenreDb} = require('../servicios/genres.js');
const router = Router();



router.get('/', async (req, res) => {
  const genres = await carryGenreDb()
 
  res.send(genres); 
} );
 
  
module.exports = router;  