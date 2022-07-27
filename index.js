const express = require("express")
const connectDB = require("./connectDB")
const {createFoodItem, createMeal, createUser, addFoodItem, addMealPlan} = require("./controllers/postControllers")
const { getAllFoodItems, getAllMeals, getAllUsers } = require("./controllers/getControllers")
const { patchMealItems, patchMealPlan } = require("./controllers/patchControllers")
const app = express(); 
app.use(express.json());
connectDB();

//create food item 
app.post('/foodItem',createFoodItem)
//create meal 
app.post('/meal',createMeal)
//create user 
app.post("/user", createUser)

//add food items to meal 
app.post("/meal/:id",addFoodItem)
//add meal plan to user
app.post("/user/:id",addMealPlan)

//get all foodItems
app.get('/foodItems',getAllFoodItems)
//get all meals 
app.get("/meals", getAllMeals)
//get all users
app.get("/users", getAllUsers)

//update meal 
app.patch("/meal/:id",patchMealItems)
//update user meal plan 
app.patch("/user/:id",patchMealPlan)


app.listen(3000,()=>{
    console.log("listening on port 3000!!")
})