const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    calorieRequirement: {
        type: Number,
        required: true
    },
    mealPlan:[
        {   
            startDate: {
                type: Number
            },
            endDate:{
                type: Number
            },
            mealId:{
                    type: "ObjectId",
                    ref: "MEAL"
            }
        }
    ]
})

const user = mongoose.model("USER",userSchema)

module.exports = user