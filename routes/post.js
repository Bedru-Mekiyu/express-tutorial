const express=require('express');
const router=express.Router();




const posts=[
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

module.exports=router;