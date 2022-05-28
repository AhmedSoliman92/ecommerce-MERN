const express = require('express');
const route = express.Router();
const { verfiyTokenAndAuth, verifyToken, verfiyTokenAndAdmin } = require('../config/verfiyToken');
const Category = require('../models/Category');


//create category
route.post('/create', verfiyTokenAndAdmin,async(req, res)=>{
    try{
        const category = new Category(req.body);
        const savedCategory = await category.save();
        res.status(201).json(savedCategory);
    }catch(err){
        res.sendStatus(400)
    }
})

//update update
route.put('/:id', verfiyTokenAndAdmin, async(req,res)=>{
    try {
        const category = await Category.findById(req.params.id);
        if(!category) return res.status(404).json("The Category is not found");
        const updatedCategory = await Category.findByIdAndUpdate({_id:category._id},{
            $set: req.body
        },{new: true})
        res.status(200).json(updatedCategory);
    } catch (err) {
        res.sendStatus(400);
    }
})



// get all cart
route.get('/', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const category = await Category.find().sort({_id:-1});
        res.status(200).json(category);
    } catch (err) {
        res.sendStatus(400);
    }
})


//delete cart
route.delete('/:id', verfiyTokenAndAdmin,async(req,res)=>{
    try {
        const category =await Category.findByIdAndDelete({_id: req.params.id});
        res.status(204).json(category);
    } catch (err) {
        res.sendStatus(400);
    }
})


module.exports = route;