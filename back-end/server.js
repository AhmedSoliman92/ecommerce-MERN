const express = require('express');
const dotenv= require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/ConnDB');
const usersRoute= require('./routes/users');
const authRoute= require('./routes/auth');
const productRoute= require('./routes/products');
const cartRoute = require('./routes/cart');
const orderRoute= require('./routes/order');
const stripeRoute = require('./routes/stripe');
const categoryRoute = require('./routes/category');
const cors = require('cors')
const app = express()
dotenv.config();

connectDB();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors())

//Routes
app.use('/users',usersRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);
app.use('/cart',cartRoute);
app.use('/orders',orderRoute);
app.use('/orders',orderRoute);
app.use('/cat',categoryRoute);
app.use('/payment',stripeRoute);




mongoose.connection.once('open',()=>{
    console.log("Connected to your DB")
    app.listen(PORT, ()=>{
        console.log("Server running on PORT : "+ PORT);
    })
})
