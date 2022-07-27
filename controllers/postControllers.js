const express = require("express")
const foodItem = require("../models/foodItemschema")
const meal = require("../models/mealSchema")
const user = require("../models/userSchema")

exports.createFoodItem = async (req,res)=>{
    const {name,calories,protein,carb,fat,acceptedUnits,itemWeight} = req.body;
    const foodItemExist =  await foodItem.findOne({name: name});
    if(foodItemExist){
        return res.status(422).json({error: "food-item already stored"})
    }
    try{
        const newFoodItem = new foodItem({name,calories,protein,carb,fat,acceptedUnits,itemWeight})
        const saveFoodItem = await newFoodItem.save(); 
        if(saveFoodItem){
            res.status(200).json({message: "food item details stored succesfully"})
        }
    }catch(err){
        res.status(422).json({error: err.message})
    }
}

exports.createMeal = async (req,res)=>{
    const {category,name} = req.body; 
    try{
        const newMeal = new meal({category,name}); 
        const saveMeal = await newMeal.save(); 
        if(saveMeal){
            res.status(200).json({message: `your ${category} meal is saved with us!!`})
        }else{
            res.status(402).json({error: "meal not saved!!"})
        }

    }catch(err){
        throw err;
    }
}

exports.createUser = async (req,res)=>{
    const {name,calorieRequirement} = req.body; 
    try{
        const newUser = new user({name,calorieRequirement}); 
        const saveUser = await newUser.save(); 
        if(saveUser){
            res.status(200).json({message: "user Saved Successfully!!"})
        }
    }catch(err){
        res.status(422).json({error: err}); 
    }
}

exports.addFoodItem = async (req,res)=>{
    const {foodItemId} = req.body; 
    const addItems = await meal.findOneAndUpdate({_id: req.params.id},{$push:{foodItems: foodItemId}},{new: true});
    res.json(addItems); 

}

exports.addMealPlan = async (req,res)=>{
    const {startDate,endDate,mealId} = req.body;
    const addMeal = await user.findOneAndUpdate({_id: req.params.id},{$push:{mealPlan: {startDate,endDate,mealId}}})
    res.json(addMeal)
}