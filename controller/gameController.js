
const Game = require('../models/gameModels');
const asyncHandler = require('express-async-handler') //the async will give error when using throw new error so to handle this have to install this package and use it

//get all games
const getGames = asyncHandler(async(req,res)=>{
    try{
        //const {id} = req.params;
        const games = await Game.find({})  //using findById  so it will give product based on id
        res.status(200).json(games);
    }catch(error){
        res.status(500);
        throw new Error(error.message)
       
    }
})

//get a single product
const getSingleGame = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const games = await Game.findById(id)  //using findById  so it will give product based on id
        res.status(200).json(games);
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})
//create a game
const createGame = asyncHandler(async (req,res)=>{
    try{
        const games = await Game.create(req.body) //using await because we are interacting with database andwhen await used asyn should be used before req and res
        res.status(200).json(games); //to get a response that data is saved and to save

    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})

//update a game
const updateGame = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Game.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message:`cannot find product with ${id}`})
        }
        const updatedProduct = await Game.findById(id)
        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})
//delete a game
const deleteGame = asyncHandler(async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Game.findByIdAndDelete(id);
        if(!product){
            res.status(400);
        throw new Error(`cannot find product with ${id}`)
        }
        res.status(200).json(product)
        console.log('success')
    }catch(error){
        res.status(500);
        throw new Error(error.message)
    }
})
//all these methods were created to refactor the code in routes.js by creating an arrow fucntion which was takenf rom the respective methods where it was used previously
module.exports = {
    getGames, getSingleGame, createGame, updateGame, deleteGame
}