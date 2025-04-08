import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";
import path from "path"


dotenv.config();

const app = express();

const __dirname = path.resolve();
console.log(__dirname)

connectDB();

app.use(express.json()); // middleware - it runs before we send data to server from user(client)

app.use("/api/products", productRoutes)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))

    })
}




app.listen(5000, () => {

    console.log("server started at http://localhost:5000")
})


