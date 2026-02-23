// const express = require('express')
import express from 'express'
const app = express();

const jwt = Math.round(Math.random()*10000).toString()
app.use(express.json())
const auth = (req, res, next) => {
    const val = req.headers.authorization;

    // 1️⃣ Header check
    if (!val) {
        return res.status(401).send("Authorization header missing");
    }

    const tokenValue = val.split(" ");

    // 2️⃣ Format check
    if (tokenValue.length !== 2) {
        return res.status(400).send("Invalid token format");
    }

    // 3️⃣ Token check
    if (tokenValue[1] === jwt) {
        next();
    } else {
        res.status(403).send("Denied");
    }
};
// app.use(auth)

app.post("/login",(req, res)=>{
    res.send(jwt)
} )
app.get("/",auth, (req, res)=>{
   res.send("Welcome");
})

// app.get("/home", (req, res)=>{
//     console.log(req.message);
//     res.json(req.url);
// })

app.listen(8000)

