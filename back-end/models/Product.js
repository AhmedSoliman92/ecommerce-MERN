const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const productSchema= new Schema({
    title:{
        type: String,
        required: true,
        unique:true
    },
    desc: {
        type: String,
        required: true
    },
    img: {
        type: String,
        default:"",
    },
    categories:{
        type: Array,
        default:[],
        required: true
    },
    details:{
        type:Object,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
    
},{timestamps:true})

module.exports = mongoose.model('Product',productSchema);