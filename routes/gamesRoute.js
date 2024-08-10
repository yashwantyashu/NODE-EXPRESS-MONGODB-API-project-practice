const express = require('express');
const router = express.Router(); //Router is part of express
const Game = require('../models/gameModels') // to save data to database
//replace app in the start with router const declaration
//export router to server.js

const {getGames, getSingleGame, createGame, updateGame, deleteGame} = require('../controller/gameController') //controller connects to route imported from controller.js 
//get all games
router.get('/', getGames)  //replaced with the maethod in controller and same replacement for other methods below
//get single game
router.get('/:id',getSingleGame)
// create a new game
router.post('/',createGame)
//update product so using PUT request
router.put('/:id',updateGame)

// delete a product

router.delete('/:id',deleteGame) 

module.exports = router; //export router to use in server.js