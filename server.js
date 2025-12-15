// const express = require('express');
import express from 'express';

const app = express();
// const path=require('path');
import path from 'path';
// const postRoutes=require('./routes/post');
import postRoutes from './routes/post.js';
import logger from './middlware/logger.js';
const port = process.env.PORT || 5000;

// app.use(express.static(path.join(__dirname,'public')));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger);
//routes
app.use('/api/post',postRoutes);

app.listen(port,(req,res)=>{
    console.log(`server is running on ${port}`);
});
