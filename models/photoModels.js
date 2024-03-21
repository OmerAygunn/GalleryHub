const mongoose = require('mongoose')
const slugify  = require('slugify');

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
    slug:{
        type:String,
        unique:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

photoSchema.pre('validate',function(next){
    this.slug = slugify(this.name,{
        lower:true,
        strict:true
    })
    next();
})

const Photo = mongoose.model('Photo',photoSchema)

module.exports = Photo