const express = require('express');
const { verfiyTokenAndAdmin } = require('../config/verfiyToken');
const Product = require('../models/Product');
const route = express.Router();

// create product by admin

route.post('/create', verfiyTokenAndAdmin,async (req,res)=>{
    try{
        console.log(req.body)
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    }catch(err){
        console.log(err)
        res.sendStatus(400)
    }
});
//update product
route.put('/:id', verfiyTokenAndAdmin, async(req,res)=>{
    try {
        const product = await Product.findById(req.params.id);
        if(!product) return res.status(404).json("The product is not found");
        const updatedProduct = await Product.findByIdAndUpdate({_id:product._id},{
            $set: req.body
        },{new: true})
        res.status(200).json(updatedProduct);
    } catch (err) {
        console.log(err)
        res.sendStatus(400);
    }
})

//delete product
route.delete('/:id', verfiyTokenAndAdmin,async(req,res)=>{
    try {
        const product =await Product.findByIdAndDelete({_id: req.params.id});
        res.status(204).json(product);
    } catch (err) {
        res.sendStatus(400);
    }
})

// get product
route.get('/:id', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.sendStatus(400);
    }
})

// get all products
route.get('/', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const product = await Product.find().sort({_id:-1});
        res.status(200).json(product);
    } catch (err) {
        res.sendStatus(400);
    }
})

module.exports=route;