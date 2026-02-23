import express from "express";
const app = express();
app.listen(8080, ()=> console.log("Server Started"))
app.get("/", (req, res)=>{
    const user = req.body;
    user.push(user);
    res.status(201).json(user);
    // res.send("Hello world");
})



















