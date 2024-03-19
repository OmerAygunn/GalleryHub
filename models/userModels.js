const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }},
    {
        timestamps:true
    }
    
    )

const User = mongoose.model('User',UserSchema)

module.exports = User