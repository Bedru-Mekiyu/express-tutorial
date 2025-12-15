import express from "express";
import path from "path";
import postRoutes from "./routes/post.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notfound.js";
import logger from "./middleware/logger.js";

const app = express();
const port = process.env.PORT || 5000;
const __dirname = path.resolve();
// console.log(__dirname);

// static files
app.use(express.static(path.join(__dirname, "public")));

// body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// logger middleware
app.use(logger);

// routes
app.use("/api/post", postRoutes);

// 404 middleware
app.use(notFound);

// error handling middleware
app.use(errorHandler);

// start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
