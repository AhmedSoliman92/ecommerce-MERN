const express = require('express');
const route = express.Router();
const { verfiyTokenAndAuth, verifyToken, verfiyTokenAndAdmin } = require('../config/verfiyToken');
const Cart = require('../models/Cart');


//create cart
route.post('/create', verifyToken,async(req, res)=>{
    try{
        const cart = new Cart(req.body);
        const savedCart = await cart.save();
        res.status(201).json(savedCart);
    }catch(err){
        res.sendStatus(400)
    }
})

//update cart
route.put('/:id', verfiyTokenAndAuth, async(req,res)=>{
    try {
        const cart = await Cart.findById(req.params.id);
        if(!cart) return res.status(404).json("The Cart is not found");
        const updatedCart = await Cart.findByIdAndUpdate({_id:cart._id},{
            $set: req.body
        },{new: true})
        res.status(200).json(updatedCart);
    } catch (err) {
        res.sendStatus(400);
    }
})


// get cart
route.get('/:userId', verfiyTokenAndAuth, async(req, res)=>{
    try {
        const cart = await Cart.findOne({userId:req.params.userId});
        res.status(200).json(cart);
    } catch (err) {
        res.sendStatus(400);
    }
})


// get all cart
route.get('/', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const cart = await Cart.find().sort({_id:-1});
        res.status(200).json(cart);
    } catch (err) {
        res.sendStatus(400);
    }
})


//delete cart
route.delete('/:id', verfiyTokenAndAuth,async(req,res)=>{
    try {
        const cart =await Cart.findByIdAndDelete({_id: req.params.id});
        res.status(204).json(cart);
    } catch (err) {
        res.sendStatus(400);
    }
})


module.exports = route;