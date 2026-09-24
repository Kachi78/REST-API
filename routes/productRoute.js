import express from "express";
const { uploadProduct, getAllProducts } = require("../controller/productController");
const upload = require("../config/multer");

const router = express.Router();

router.post("/upload/:userId", upload.single("image", uploadProduct));
router.get("/getAll", getAllProducts);

export default router;