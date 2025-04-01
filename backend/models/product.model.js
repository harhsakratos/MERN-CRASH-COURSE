import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        requrired: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema) // collection === model


export default Product