const express = require('express');
const route = express.Router();
const cryptoJS = require('crypto-js');
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {verfiyTokenAndAuth} = require('../config/verfiyToken')
//Register a new User 
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
        const accessToken= jwt.sign(
            {
                username,
                id:user._id,
                admin:user.isAdmin
            },
            process.env.SECRET_JWT,
            {expiresIn: '15m'}
        )

        res.status(201).json({...other,accessToken});
    }catch(err){
        console.log(err)
        res.sendStatus(400);
    }

    
})

//Update User

route.put('/:id',verfiyTokenAndAuth, async(req,res)=>{
    if (req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY);
    }
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        },{
            new:true
        })
        res.status(200).json(updatedUser);
    } catch (err) {
        res.sendStatus(400);
    }
    
})

//delete user
route.delete('/:id', verfiyTokenAndAuth,async(req,res)=>{
    try {
        const user =await User.findByIdAndDelete({_id: req.params.id});
        res.status(204).json(user);
    } catch (err) {
        res.sendStatus(400);
    }
})
module.exports = route;