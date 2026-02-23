
import express from "express";
const userRouter = express.Router();

userRouter.get("/", ( res)=>{
    res.send("Hello world")
})

userRouter.post("/", (res)=>{
    res.send("hello world post user");
})

export default userRouter;



