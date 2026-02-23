// const express = require('express')
import express from 'express'
const app = express();
app.listen(8000)
const logger =(req, res, next)=>{
    req.message = "This is logger funciton"
    next();
}
app.use(logger)
app.get("/", logger, (req, res)=>{
    // app.use(logger)
    console.log(req.message);
    res.json(req.url);
})

app.get("/home", (req, res)=>{
    console.log(req.message);
    res.json(req.url);
})

