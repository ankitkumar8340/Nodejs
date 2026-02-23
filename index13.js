import express from "express"

const app = express()
app.use(express.json())
app.listen(8000, ()=> console.log("Server is running"));

const users = [];

app.post("/signup", (req, res)=>{
    const body = req.body;

    users.push(body)
    res.json(users);
})
app.get("/users", (req, res)=>{
    res.json(users);
})





