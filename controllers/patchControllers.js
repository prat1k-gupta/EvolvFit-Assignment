const express = require("express");
const user = require("../models/userSchema")
exports.patchMealItems = async (req, res)=>{
    const {category,name,foodItems} = req.body; 
    const updateMeal = await user.findOneAndUpdate({_id: req.params.id},{$set:{category,name,foodItems}},{new: true})
    res.json(updateMeal)
}

exports.patchMealPlan = async (req,res)=>{
    const {startDate,endDate,mealId} = req.body; 
    const updateMealPlan = await user.findOneAndUpdate({_id: req.params.id},{$set:{mealPlan: {startDate,endDate,mealId}}})
    res.json(updateMealPlan)
}