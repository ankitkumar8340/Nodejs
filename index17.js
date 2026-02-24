import mongoose from "mongoose"
// import express from "express"
// const app = express();

const dbConnect = async () =>{
    await mongoose.connect("mongodb://localhost:27017/lpu26a")
}

const userSchema = mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    role:{type:String}
})

const userModel = mongoose.model("users",userSchema)
const users = await userModel.find()
console.log(users)







// app.listen(8000, ()=> console.log("server is running"))





















