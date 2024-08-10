require('dotenv').config()
 const express = require('express')
 const mongoose = require('mongoose') 
 //const proRoute = require('./routes/productRoute') //importing to use
 const Product = require('./models/productModels')
 //const Game = require('./models/gameModels')
 const gameRoute = require('./routes/gamesRoute')
 const errorMiddleware = require('./middleware/errorMiddleware')
 const app = express()
 const MONGO_URL = process.env.MONGO_URL
 const PORT = process.env.PORT || 3000
const FRONTEND = process.env.FRONTEND

const cors = require('cors'); //implementing cors policy by installing cors express and using it here
//using express middleware for getting json data
 app.use(express.json())

 //configuring cors 
 var corsOptions = {        //copied from official documentation to configure the cors on which ip to allow for access
    origin: FRONTEND,  //only allow this url to access the api - replace with localhost or ip with port number, multiple domains can be added with an array like ['example.com','example2.com']
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
 app.use(cors(corsOptions ));
 

 //route to see in browser 


app.get('/',(req,res)=>{
    res.send('hello node api')
})

app.use(errorMiddleware); //using it from above const which is exported from the errormiddleware js file

//creating another route
app.get('/blog',(req,res)=>{
    res.send('Hello blog im yashwant')
})


//routes
//app.use('/api', proRoute); //middleware to use the code/requests from productRoute.js 

app.use('/api/games', gameRoute);


//mongoose.set("strictQuery",false)
mongoose.connect(MONGO_URL) //will be a aprt of thewebsite when creating a cluster //using environments variable as the direct url in code is not a good practice so imprting doenv frm npm, declared in env,aimport in server file, decalre aconst and use it here
.then(()=>{
    console.log('connected to mongodb') 
    app.listen(PORT,()=>{
        console.log(`node api app is running on port ${PORT}`) //connect moongo first and then this right way
    })
    
}).catch(()=>{
    console.log(error)
})