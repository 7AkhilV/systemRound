const Category = require('../models/cateogries.schema')

const getAllCategories = async (req,res)=>{
    try {
        const categories = await Category.find();
        return res.status(200).json(categories)
        
    } catch (error) {
        return res.status(500).json({message:"An erorr occured", error})
    }
}

const createCategory = async (req,res)=>{
    try {
        const {name} = req.body;
        const category = new Category({name});
        await category.save();
        return res.status(201).json({message:"category successfully created",category})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}

const updateCategory = async (req,res)=>{
    try {
        const {name} = req.body;
        const category = await Category.findByIdAndUpdate(req.params.categoryId,{name},{new:true});
        return res.status(200).json({message:"Updated the category", category})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}

const deleteCategory = async (req,res)=>{
    try {
        await Category.findByIdAndDelete(req.params.categoryId);
        return res.status(200).json({message:"Deleted successfully"})
    } catch (error) {
        return res.status(500).json({message:"An error occured",error})
    }
}



module.exports = {getAllCategories, createCategory, updateCategory, deleteCategory}