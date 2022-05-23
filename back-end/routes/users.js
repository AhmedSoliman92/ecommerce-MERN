const express = require('express');
const route = express.Router();
const cryptoJS = require('crypto-js');
const User = require('../models/User');
const { verfiyTokenAndAuth, verfiyTokenAndAdmin } = require('../config/verfiyToken');


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
// get statistics

route.get('/stats', verfiyTokenAndAdmin, async(req, res)=>{
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear()-1))
        try {
            const data = await User.aggregate([
                {$match:{createdAt:{$gte: lastYear }}},
                {$project:{day: {$dayOfMonth: "$createdAt"}}},
                {$group:{
                    _id: "$day",
                    total: {$sum:1}
                }}
            ]);
            res.status(200).json(data);
        } catch (err) {
            console.log(err)
            res.sendStatus(400);
        }
})


// get user
route.get('/:id', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const user = await User.findById(req.params.id);
        const {password, ...other} = user._doc;
        res.status(200).json(other);
    } catch (err) {
        res.sendStatus(400);
    }
})

// get all users
route.get('/', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const users = await User.find().sort({_id:-1});
        res.status(200).json(users);
    } catch (err) {
        res.sendStatus(400);
    }
})


module.exports = route;