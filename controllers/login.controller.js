require('dotenv').config()
const jwt = require('jsonwebtoken')
// const bcryptjs = require('bcryptjs')
const Login = require('../models/login.schema')

const adminLogin = async (req,res)=>{
    const {email,password}=req.body;
    try {
        if(email !== 'admin@codesfortomorrow.com' || password !== 'Admin123!@#'){
            return res.status(401).json({message:"Invalid email or password"})
        }

        const token = jwt.sign({email: 'admin@codesfortomorrow.com'},process.env.secret_key,{
            expiresIn:'1h'
        })

        return res.status(200).json({message:"Successfully logged in",token})

    } catch (error) {
        return res.status(500).json({message:"An error occured"})
    }
}

module.exports = adminLogin

// const password = "Admin123!@#"
// bcryptjs.genSalt(10,(err,salt)=>{
//     if(err){
//         throw err
//     }

//     bcryptjs.hash(password,salt,(err,hash)=>{
//         if(err){
//             throw err
//         }
//         console.log(`Hashed passowrd:' ${hash}`)
//     })
// })
