const mongoose = require('mongoose') //to have a database

const gameSchema = mongoose.Schema(  //to have a product schema
    {
        name:{
            type:String,
            required:[true,"Please enter product name"]
        },
        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            required:true
        },
        image:{
            type:String,
            required:false
        }
    },
    {
        timeStamps:true    //to know when a data is created in the database
    }
)

const Game = mongoose.model('Game',gameSchema); //model named Product that uses the schema named productSchema

module.exports = Game; //for export

//tosave data use data model
//to save product data use product model