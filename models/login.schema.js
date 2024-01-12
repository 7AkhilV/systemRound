const mongoose = require('mongoose');

const loginSchmea = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Login = mongoose.model('Login',loginSchmea)

module.exports = Login

