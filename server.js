 const express = require('express')
 
 const app = express()

 //route to see in browser 

app.get('/',(req,res)=>{
    res.send('hello node api')
})
app.listen(3000,()=>{
    console.log('node api app is running on port 3000')
})