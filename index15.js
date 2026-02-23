import express from "express"
import jwt from "jsonwebtoken"
const app = express()
const secret = "lpu"
const token= "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnYW1pbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzMzg4NCwiZXhwIjoxNzcxODM3NDg0fQ.UBvkaVI2BoslMZjUfVlZ-i9-Z7uJKV1zhNUEqVf5oTw"
const user = jwt.verify(token, secret)
console.log(user)








