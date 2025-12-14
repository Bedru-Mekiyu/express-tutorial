const express = require('express');
const app = express();

//root route
app.get('/',(req,res)=>{
    res.send({message: "Welcome to the Home Page"});
}   );

app.get('/about',(req,res)=>{
    res.send({message: "Welcome to the About Page"});
}   );


app.listen(3000,(req,res)=>{
    console.log("Server is running on port 3000");});