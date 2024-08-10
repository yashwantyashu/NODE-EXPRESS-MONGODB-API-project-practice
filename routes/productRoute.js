 const express = require('express');
 const router = express.Router(); //Router is part of express
 const Product = require('../models/productModels') // to save data to database
 //replace app in the start with router const declaration
 //export router to server.js


 
 //to get product by id copy the id from the response and paste it in the url next to products/ to get the product by id
router.get('/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const products = await Product.findById(id)  //using findById  so it will give product based on id
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

//update product so using PUT request
router.put('/products/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message:`cannot find product with ${id}`})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500).json({message:error.message})
    }
})

// delete a product

router.delete('/products/:id',async (req,res)=>{
    try{
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message:`cannot find product with ${id}`})
        }
        
        res.status(200).json(product)
        console.log('success')
    }catch(error){
        res.status(500).json({message:error.message})
        console.log('error')
    }
})
//saving data so http method POST

router.post('/products',async (req,res)=>{
    try{
        const product = await Product.create(req.body) //using await because we are interacting with database andwhen await used asyn should be used before req and res
        res.status(200).json(product); //to get a response that data is saved and to save

    }catch(error){
        console.log(error.message);
        res.status(500).json({message:error.message})
    }
})

module.exports = router; //export router to use in server.js