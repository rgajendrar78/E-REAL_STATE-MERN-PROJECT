import express from "express";
import userRoutes from "./routes/userRoute.js";
import adminRoutes from "./routes/adminRoutes.js";
import globalErrorHandler from "./middlewares/globalErrorHandler.js";


import cors from "cors";

//importing configs

import { config } from "dotenv";
config({ path: "./config.env" });


export const app = express();

app.use(express.json())

//middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(globalErrorHandler)

//routes
app.use(userRoutes);
app.use('/admin', adminRoutes);



