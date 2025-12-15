//middleware specific to this router
const logger=(req,res,next)=>{
    console.log(`${req.method} request made to ${req.originalUrl} at ${new Date().toISOString()}`);
    next();
} 

export default logger;