const mongoose = require('mongoose')

//price options
const priceOptionsSchema = new mongoose.Schema({
    duration:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    type:{
        type:String,
        enum: ['Hourly','Weekly','Monthly'],
        required:true,
    }
})

// service schema
const serviceSchema = new mongoose.Schema({
    categoryId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Category",
    },
    name:{
        type:String,
        required:true
    },
    type:{
        type:String,
        enum : ['Normal', 'VIP'],
        required:true
    },
    priceOptions: [priceOptionsSchema ]
})

const Service = mongoose.model('Service', serviceSchema)

module.exports = Service;

