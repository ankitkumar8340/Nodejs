import express from "express";
import { getProduct, postProduct } from "../controllers/productController.js";
const productRouter = express.Router();
productRouter.get("/", getProduct)

productRouter.post("/", postProduct)
export default productRouter;