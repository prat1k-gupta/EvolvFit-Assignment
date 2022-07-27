const mongoose = require("mongoose")
require("dotenv").config(); 
const url = process.env.URL; 
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(url,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })    
        if(conn){
            console.log("db connected!!")
        }else{
            console.log("db not connected")
        }

    }catch(err){
        throw err; 
    }
}
module.exports = connectDB;