const express = require('express');
const route = express.Router();

const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_KEY);
route.post('/',(req, res)=>{
        
        stripe.charges.create({
            source: req.body.token,
            amount: req.body.amount,
            currency: req.body.currency
        },
        (stripErr, stripeRes)=>{
            if(stripErr){
                console.log(stripErr)
                res.status(500).json(stripErr);
            }else{
                res.status(200).json(stripeRes);
            }
        }
        )
})


module.exports = route;