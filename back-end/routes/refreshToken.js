const express = require('express');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const route = express.Router();


route.post('/',async(req,res)=>{
    try {
        const refreshToken = req.body.token;

    if(!refreshToken) return res.status(401).json("You are not authorized");
    const user = await User.findById(req.body.id);
    if(!user.refreshToken.includes(refreshToken)) return res.status(403).json("Refresh token is not valid");
    jwt.verify(refreshToken,process.env.REFRESH_KEY,async(err,user)=>{
        err && console.log(err)
        await User.findByIdAndUpdate(
            {_id:user.id},
            {
                $pull:{
                    refreshToken:{
                        $in:[refreshToken]
                    }
                }
            }
            )
    })
        const getNewAccessToken = (user)=>{
            return jwt.sign(
                {
                    id:user._id,
                    isAdmin:user.isAdmin
                },
                process.env.SECRET_JWT,
                {expiresIn:'30s'}
                )
            };
            
            const getNewRefreshToken = (user)=>{
                return jwt.sign(
                    {
                        id:user._id,
                        isAdmin:user.isAdmin
                    },
                    process.env.REFRESH_KEY,
                    )
                };
        const newAccessToken= getNewAccessToken(user);
        const newRefreshToken= getNewRefreshToken(user);
    await User.findByIdAndUpdate(
        {_id:user._id},
        {
            $push:{
                refreshToken:newRefreshToken
            }
        }
        );
        res.status(201).json({
            accessToken:newAccessToken,
            refreshToken:newRefreshToken
            
        });
    } catch (err) {
        console.log(err)
    }
        
})

module.exports = route;