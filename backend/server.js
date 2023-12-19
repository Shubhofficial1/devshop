import express from "express";
import productRoutes from "./routes/productRoutes.js";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
dotenv.config();
connectDb();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Api is running...");
});

app.use("/api/v1/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
