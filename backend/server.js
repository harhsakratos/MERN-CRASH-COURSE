import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";


dotenv.config();

const app = express();

connectDB();

app.use(express.json()); // middleware - it runs before we send data to server from user(client)

app.use("/api/products", productRoutes)



app.listen(5000, () => {
    
    console.log("server started at http://localhost:5000")
})


