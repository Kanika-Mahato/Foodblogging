const mongoose = require ('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('myUser',signUpTemplate)