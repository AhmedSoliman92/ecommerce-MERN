const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema= new Schema({

    category:{
        type:String,
        required:true,
        unique:true
    },
    img:{
        type:String,
        required:true,
        default:''
    }
    
},{timestamps:true})

module.exports = mongoose.model('Category',categorySchema);