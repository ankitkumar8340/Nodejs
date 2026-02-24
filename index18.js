import mongoose from "mongoose"
import express from "express"
const app = express();



const dbConnect = async () => {
    await mongoose.connect("mongodb://localhost:27017/lpu26a")
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log(err));
}

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String }
})

await dbConnect()
const userModel = mongoose.model("users", userSchema)

app.get("/", async (req, res) => {
    const users = await userModel.find()
    res.send(users)
})








app.listen(8080, () => console.log("server is running"))





















