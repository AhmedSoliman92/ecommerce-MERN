const express = require('express');
const route = express.Router();
const cryptoJS = require('crypto-js');
const User = require('../models/User')
const jwt = require('jsonwebtoken')
//Register a new User 




const createAccessToken = (user)=>{
    return jwt.sign(
        {
            id:user._id,
            admin:user.isAdmin
        },
        process.env.SECRET_JWT,
        {expiresIn: '30s'}
    )
}
const createRefreshToken = (user)=>{
    return jwt.sign(
        {
            id:user._id,
            admin:user.isAdmin
        },
        process.env.REFRESH_KEY
    )
}
route.post('/register',async(req, res)=>{
    try{
        req.body.password = cryptoJS.AES.encrypt(req.body.password,process.env.SECRET_KEY);
        const newUser = await new User(req.body);
        const savedUser = await newUser.save();
        const {password , ...other}= savedUser._doc;
        res.status(201).json(other);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
})

// User login
route.post('/login',async(req, res)=>{
    try{
        const username= req.body.username;
        const user = await User.findOne({username:username});

        if(!user) return res.status(401).json("Wrong Credential1..");
        const hashedPassword= cryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const stringPassword = hashedPassword.toString(cryptoJS.enc.Utf8);
        if(stringPassword !== req.body.password) {
            return res.status(401).json("Wrong Credential2..");
        }
        const {password, ...other} = user._doc;
        const accessToken= createAccessToken(user);
        const refreshToken=createRefreshToken(user);
        await User.findByIdAndUpdate({_id:user._id},{
            $push:{
                refreshToken:refreshToken
            }
        });
        res.status(201).json({...other,accessToken,refreshToken});
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }

    
})

//logout

route.post('/logout',async(req, res)=>{
    try{
        const {refreshToken} = req.body;
        const _id=req.body.id
        const data =await User.findByIdAndUpdate(
            {_id},
            {
                $pull:{
                    refreshToken:{
                        $in:[refreshToken]
                    }
                }
            },
            {new:true}
            )
        res.status(201).json(data);
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }
})


module.exports = route;