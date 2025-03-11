import express from "express";
import productRoutes from "./products/productsRoutes.js";
import healthCheckRouter from "./health_check.js";

const app = express();

app.use('/products', productRoutes);

app.use('/health-check', healthCheckRouter)

export default app;