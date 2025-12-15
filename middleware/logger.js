import "colors"; // or: const colors = require("colors");

const methodColors = {
  GET: "blue",
  POST: "green",
  PUT: "yellow",
  DELETE: "red",
};

const logger = (req, res, next) => {
  const colorName = methodColors[req.method] || "white";

  const msg = `${req.method} request made to ${req.originalUrl} at ${new Date().toISOString()}`;

  console.log(msg[colorName]); // colors lib adds methods to String prototype

  next();
};

export default logger;
