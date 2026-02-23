import express from "express";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
//router
const app = express();

app.use("/api/users", userRoutes);
app.use("/api/product", productRoutes);

app.listen(8000, ()=> console.log("Server started"));

// const userRouter = express.Router();
// const productRouter = express.Router();
// userRouter.get("/", (req, res)=>{
//     res.send("Hello world")
// })

// userRouter.post("/", (req,res)=>{
//     res.send("hello world post user");
// })

// productRouter.get("/", (req,res)=>{
//     res.send("this is get req of product router");
// })

// productRouter.post("/", (req,res)=>{
//     res.send("this is post request of productRouter")
// })



// app.use("/api/users", userRouter)
// app.use("/api/product", productRouter)




















