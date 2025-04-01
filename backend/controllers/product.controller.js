import Product from "../models/product.model.js"
import mongoose from "mongoose"

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ sucess: true, data: products })
    } catch (error) {
        console.log("error in fetching the products : ", error.message)
    }
}


export const createProduct = async (req, res) => {
    const product = req.body; //user will send the data
    console.log("product data is : ", product)

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ sucess: false, message: "Please provide all the details" })
    }

    const newProduct = new Product(product);
    console.log("newProduct data is : ", newProduct)


    try {
        await newProduct.save();
        res.status(201).json({ sucess: true, data: newProduct })
    } catch (error) {
        console.log("Error in creating the product", error.message)
        return res.status(500).json({ sucess: false, message: 'Server Error' })
    }
}


export const deleteProduct = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ sucess: false, message: 'Invalid Product Id' })
    }

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({ sucess: true, mode: "Delete", message: 'Product deleted' })

    } catch (error) {
        res.status(500).json({ sucess: false, message: 'server error' })
    }
}


export const updateProduct = async (req, res) => {

    const { id } = req.params;
    console.log("id is :", id)

    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ sucess: false, message: 'Invalid Product id' })
    }

    const product = req.body
    console.log("product data is : ", product)
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true })
        res.status(200).json({ sucess: true, mode: 'Update', data: updatedProduct })
    } catch (error) {
        res.status(404).json({ sucess: false, message: 'server error' })
    }
}


