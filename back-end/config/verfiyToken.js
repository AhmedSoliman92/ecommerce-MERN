const jwt =  require('jsonwebtoken');


const verifyToken = (req,res,next)=>{

    const authHeader = req.headers['token'];
    if(authHeader){

        jwt.verify(authHeader.split(' ')[1] , process.env.SECRET_JWT, (err, user)=>{
            if(err)  return res.status(403).json("Token is invalid");
            req.user = user;
            next();
        })
    }else{
        console.log(authHeader)
        return res.status(401).json("You are not Authorized")
    }
}

const verfiyTokenAndAuth = (req, res, next)=>{
    verifyToken(req,res, ()=>{
        if(req.user.id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json("You are not allowed to do that!");
        }
    });
};

const verfiyTokenAndAdmin = (req, res, next)=>{
    verifyToken(req, res, ()=>{
        if(req.user.isAdmin){
            next();
        }else {
            res.status(403).json(" You are not allowed to do that")
        }
    })
}
module.exports = {verifyToken, verfiyTokenAndAuth, verfiyTokenAndAdmin};