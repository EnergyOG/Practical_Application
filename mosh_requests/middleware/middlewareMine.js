function loader(req,res,next){
    console.log("Loading....");
    next();
}
module.exports.loader = loader;
