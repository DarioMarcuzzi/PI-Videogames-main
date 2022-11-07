const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const  VideoGames  = require('../controladores/videogames.js');
// const { Genres } = require('../models/Genre.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', VideoGames);
// router.use('/genres', Genres);

module.exports = router;
