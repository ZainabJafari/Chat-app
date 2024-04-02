import express from "express";
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200 
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 2000;

dotenv.config()

app.use(express.json());
app.use(cookieParser())

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/user", userRoutes)



app.listen(PORT, () => {
  connectToMongoDB();
 console.log(`Server Running on port ${PORT}!`)
})