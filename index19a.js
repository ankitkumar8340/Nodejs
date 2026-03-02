
import express from "express"
const app = express();
const num1 = process.argv[2];
const num2 = process.argv[3];
const PORT = num1;

app.listen(PORT, ()=>{
    console.log("server is running");
})

app.get("/", (req, res)=>{
    res.send(`the sum of ports is ${num1+num2}`)
})
















