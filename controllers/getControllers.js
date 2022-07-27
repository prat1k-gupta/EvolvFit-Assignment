const express = require('express')
const foodItem = require("../models/foodItemschema")
const meal = require("../models/mealSchema")
const user = require("../models/userSchema")
exports.getAllFoodItems = async (req,res)=>{
    const allFoodItems = await foodItem.find({}); 
    res.json(allFoodItems);
}

exports.getAllMeals = async (req,res)=>{
    const allMeals = await meal.find({}).populate("foodItems"); 
    if(!allMeals){
        return res.status(402).json("no meals exist")
    }
    res.status(200).json(allMeals)
}

exports.getAllUsers = async (req,res)=>{
    const allUsers = await user.find({}).populate("mealPlan.mealId")
    res.status(200).json(allUsers)
}