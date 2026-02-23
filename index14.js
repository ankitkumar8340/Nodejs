import jwt from "jsonwebtoken"
import express from "express"
const SECRET = "lpu"
const app = express()
app.listen(8000)

const user = {
    name:"john",
    email:"john@gamil.com",
    role:"student"
}

const token = jwt.sign(user, SECRET, {expiresIn:"1h"})
console.log(token)



















