// const express=require('express');
import e from 'express';
import express from 'express';
const router=express.Router();




let posts=[
    {id:1,title:'First Post',content:'This is the content of the first post.'},
    {id:2,title:'Second Post',content:'This is the content of the second post.'},
    {id:3,title:'Third Post',content:'This is the content of the third post.'}
];  


  
router.get('/',(req,res)=>{
    const limit=parseInt(req.query.limit);

    if(!isNaN(limit) && limit>0){
        return res.status(200).json(posts.slice(0,limit));
    }
    res.status(200).json(posts);
    
});


router.get('/:id',(req,res)=>{
 const id=parseInt(req.params.id);
    const post=posts.find(p=>p.id===id);
    if(!post){
        return res.status(404).json({message:`post with the id ${id} not found`});
    }
    res.status(200).json(post);
});

router.post('/',(req,res)=>{
 const newpost={
    id:posts.length+1,
    title:req.body.title,}
    if(!newpost.title){
        return res.status(400).json({message:'title is required'});
    }
    posts.push(newpost);
    res.status(201).json(posts);
});


router.put('/:id',(req,res)=>{
 const id=parseInt(req.params.id);
 const post=posts.find(p=>p.id===id);   
 if(!post){
    return res.status(404).json({message:`post with the id ${id} not found`});
 }
    post.title=req.body.title;
    res.status(200).json(posts);
});

router.delete('/:id',(req,res)=>{
 const id=parseInt(req.params.id);
 const post=posts.find(p=>p.id===id);   
 if(!post){
    return res.status(404).json({message:`post with the id ${id} not found`});
 }
    posts=posts.filter(p=>p.id!==id);
    res.status(200).json(posts);
});

export default router;