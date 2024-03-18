const mongoose = require('mongoose')

const Schema = mongoose.Schema

mongoose.connect('mongodb://127.0.0.1:27017/GalleryHub-db')

const photoSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
    },
    createdDate:{
        type:Date,
        default:Date.now()
    },
})

const Photo = mongoose.model('Photo',photoSchema)

module.exports = Photo