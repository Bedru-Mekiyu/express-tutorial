import express from "express";
import {
  getPosts,

  createPost, 
  getPost,

  updatePost,
  deletePost,
} from "../controller/postcontroller.js"; 


const router = express.Router();


// GET /api/post?limit=2
router.get("/",getPosts );

// GET /api/post/:id
router.get("/:id",getPost);

// POST /api/post
router.post("/",createPost );

// PUT /api/post/:id
router.put("/:id",updatePost );

// DELETE /api/post/:id
router.delete("/:id",deletePost);

export default router;
