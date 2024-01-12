const Service = require('../models/service.schema')

const addService = async (req,res)=>{
    try {
        const {name,type,priceOptions} = req.body;
        const service = new Service({
            categoryId:req.params.categoryId,
            name,
            type,
            priceOptions,
        })
        await service.save();
        return res.status(201).json({message:"Service added",service})
    } catch (error) {
        return res.status(500).json({message:"An error occured", error})
    }
}

const getAllServices = async (req,res)=>{
    try {
        const service = await Service.find({categoryId: req.params.categoryId})
        return res.status(200).json({message:"All services",service})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}

const deleteService = async (req,res)=>{
    try {
        await Service.findByIdAndDelete(req.params.serviceId)
        return res.status(200).json({message:"Deleted the service"})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}

const updateService = async (req,res)=>{
    try {
        const {name,type,priceOptions} = req.body;
        const service = await Service.findByIdAndUpdate(req.params.serviceId,{
            name,type,priceOptions
        },{new:true})
        return res.status(200).json({message:"Updated the service",service})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}

module.exports = {addService,getAllServices,deleteService,updateService}