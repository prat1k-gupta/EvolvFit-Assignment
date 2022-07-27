const mongoose = require("mongoose")
const mealSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            toLowerCase: true,
            enum:{
                values: ['Breakfast','Lunch','Evening Snack','Dinner'],
                message: "only select from 'Breakfast','Lunch','Evening Snack','Dinner'"
            },
            required: true
        },
        name: {
            type: String,
            required: true
        },
        foodItems:[{
            type: "ObjectId",
            ref: 'foodItem'
        }]
    }
)
const meal = mongoose.model('MEAL',mealSchema);

module.exports = meal;