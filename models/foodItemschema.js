const mongoose = require("mongoose")

const foodItemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        calories: {
            type: Number,
            required: true
        },
        protein: {
            type: Number,
            required: true
        },
        carb: {
            type: Number,
            required: true
        },
        fat: {
            type: Number,
            required: true
        },
        acceptedUnits:{
            type: String,
            toLowerCase: true,
            enum:{
                values: ['ml','liter','kg','g','item'],
                message: "choose only from 'ml','liter','kg','g','item'"
            },
            required: true
        },
        itemWeight: {
            type: String,
            toLowerCase: true
        }
    }
)

const foodItem = mongoose.model("foodItem",foodItemSchema); 

module.exports = foodItem; 