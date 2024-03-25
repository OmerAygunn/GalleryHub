const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const slugify  = require('slugify');


const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        unique:true
    }
    },
    {
        timestamps:true
    })

    UserSchema.pre('validate',function(next){
        this.slug = slugify(this.userName,{
            lower:true,
            strict:true
        })
        next();
    })
    

    UserSchema.pre('save', async function(next) {
        const user = this;    
        try {
            // Parolayı hash'le
            const hash = await bcrypt.hash(user.password, 10);
            user.password = hash;
            next();
        } catch (error) {
            return next(error);
        }
    });
    
    
const User = mongoose.model('User',UserSchema)

module.exports = User