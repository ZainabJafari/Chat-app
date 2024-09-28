import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";
import {app , server} from './socket/socket.js'

dotenv.config();
/* const __dirname = path.resolve()
 */
app.use(cors({
  origin: 'http://localhost:3000', // Specificera den exakta origin som tillåts
  credentials: true, // Tillåt credentials (cookies, headers, etc.)

}));
const PORT = process.env.PORT || 2000;



app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/user", userRoutes);

/* app.use(express.static(path.json(__dirname, "/frontend/dist")))

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
}) */

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}!`);
});
