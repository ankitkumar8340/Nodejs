import express from "express";
const productRouter = express.Router();
productRouter.get("/", (res)=>{
    res.send("this is get req of product router");
})

productRouter.post("/", (res)=>{
    res.send("this is post request of productRouter")
})
export default productRouter;