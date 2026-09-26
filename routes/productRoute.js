import express from "express";
import { uploadProduct, getAllProducts } from "../controller/productController";
import upload from "../config/multer";

const router = express.Router();

router.post("/upload/:userId", upload.single("image"), uploadProduct);
router.get("/getAll", getAllProducts);

export default router;