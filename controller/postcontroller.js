


let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is the content of the first post.",
  },
  {
    id: 2,
    title: "Second Post",
    content: "This is the content of the second post.",
  },
  {
    id: 3,
    title: "Third Post",
    content: "This is the content of the third post.",
  },
];
const getPosts=(req, res) => {
  const limit = parseInt(req.query.limit, 10);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
};

const getPost= (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`Post with the id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
};

const createPost=(req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
    content: req.body.content || "",
  };

  if (!newPost.title) {
    const error = new Error("Title is required");
    error.status = 400;
    return next(error);
  }

  posts.push(newPost);
  res.status(201).json(posts);
};

const updatePost=(req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`Post with the id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  if (req.body.title) {
    post.title = req.body.title;
  }
  if (req.body.content) {
    post.content = req.body.content;
  }

  res.status(200).json(posts);
};
const deletePost= (req, res, next) => {
  const id = parseInt(req.params.id, 10);
  const post = posts.find((p) => p.id === id);

  if (!post) {
    const error = new Error(`Post with the id ${id} not found`);
    error.status = 404;
    return next(error);
  }

  posts = posts.filter((p) => p.id !== id);
  res.status(200).json(posts);
};
export {getPosts,getPost,createPost,updatePost,deletePost};