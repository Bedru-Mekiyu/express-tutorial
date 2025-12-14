const express = require('express');
const app = express();
const path=require('path');
const postRoutes=require('./routes/post');
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname,'public')));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/post',postRoutes);

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
});