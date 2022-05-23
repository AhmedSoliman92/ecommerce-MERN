const express = require('express');
const dotenv= require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/ConnDB');
const usersRoute= require('./routes/users');
const authRoute= require('./routes/auth');
const productRoute= require('./routes/products')
const app = express()
dotenv.config();

connectDB();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());



//Routes
app.use('/users',usersRoute);
app.use('/auth',authRoute);
app.use('/products',productRoute);


mongoose.connection.once('open',()=>{
    console.log("Connected to your DB")
    app.listen(PORT, ()=>{
        console.log("Server running on PORT : "+ PORT);
    })
})
