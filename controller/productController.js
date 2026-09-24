import productModel1 from "../model/productModel";
import productModel1 from "../model/productModel";
import userModel from "../model/userModel";


// UPLOAD/CREATE-PRODUCT

const uploadProduct = async (req, res) => {
    try{
        const getUserId = await userModel.findById(req.params.userId);
        const { name, description, category, price, stock, image } = 
            req.body;
        if (!getUserId) {
            return res.status(404).json({
                message: "User not found!",
            });
        }
    
    if(!req.file) {
        return res.status(400).json({
            message: "Image file is required here!... Upload an image file!",
        })
    }
    const result = await cloudinary.uploader.upload(req.file.path)
    const imageUrl = result.secure_url;

    const product = await productModel.create({
        name, description, category, price, stock, image: imageUrl,
    });
    
    await getUserId.products.push(products_Id);
    await getUserId.save();
    return res.status(201).json({
        message: "Product Uploaded Successfully", product
    });

    }catch(error) {
        return res.status(500).json({ message: error.message });
    }
}

//GET-ALL-PRODUCTS

const getAllProducts = async(req, res) => {
    try{
        const getAll = await productModel1.find();
        return res.status(200).json({ message: "All Products fetched Successfully!"});
    }catch(error){
        return res.status(500).json({
            message: error.message
        });
    }
}
export { uploadProduct, getAllProducts};