const express = require('express');
const route = express.Router();
const { verfiyTokenAndAuth, verifyToken, verfiyTokenAndAdmin } = require('../config/verfiyToken');
const Order = require('../models/Order');


//create order
route.post('/create', verifyToken, async(req, res)=>{
    try{
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(201).json(savedOrder);
    }catch(err){
        res.sendStatus(400)
    }
})

//update order
route.put('/:id', verfiyTokenAndAdmin, async(req,res)=>{
    try {
        const order = await Order.findById(req.params.id);
        if(!order) return res.status(404).json("The order is not found");
        const updatedOrder = await Order.findByIdAndUpdate({_id:order._id},{
            $set: req.body
        },{new: true})
        res.status(200).json(updatedOrder);
    } catch (err) {
        res.sendStatus(400);
    }
})

// income statistics

route.get('/stats',verfiyTokenAndAdmin, async(req, res)=>{
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth()-1));
    const previousMonth = new Date(new Date(lastMonth.setDate(lastMonth.getMonth()-1)))
    try {
        const income = await Order.aggregate([
            {
                $match:{
                    createdAt:{
                        $gte:previousMonth
                    }
                },
                $project:{
                    month:{
                        $month:"$createdAt"
                    },
                    $sales: "$amount"
                },
                $group:{
                    _id: "$month",
                    total:{
                        $sum:"$sales"
                    }
                }
            }
        ]);
        res.status(200).json(income);
    } catch (err) {
        res.sendStatus(400);
    }
})
// get orders
route.get('/:userId', verfiyTokenAndAuth, async(req, res)=>{
    try {
        const order = await Order.find({userId:req.params.userId});
        res.status(200).json(order);
    } catch (err) {
        res.sendStatus(400);
    }
})


// get all orders
route.get('/', verfiyTokenAndAdmin, async(req, res)=>{
    try {
        const order = await Order.find().sort({_id:-1});
        res.status(200).json(order);
    } catch (err) {
        res.sendStatus(400);
    }
})


//delete order
route.delete('/:id', verfiyTokenAndAdmin,async(req,res)=>{
    try {
        const order =await Order.findByIdAndDelete({_id: req.params.id});
        res.status(204).json(order);
    } catch (err) {
        res.sendStatus(400);
    }
})


module.exports = route;

