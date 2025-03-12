import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import connectToSocket from "./controller/shoketManjer.js";
import cors from "cors";
import userRoute from "./routes/userRoute.js";

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoute);

const start = async () => {
  const connectionDb = await mongoose.connect(
    "mongodb+srv://singhsonu6200:ZhNkNsWQMxnHeUQ8@zoom-clone.g6xs8.mongodb.net/?retryWrites=true&w=majority&appName=Zoom-clone"
  );
  console.log(`MONGO connect DB Host ${connectionDb.connection.host}`);
  server.listen(app.get("port"), () => {
    console.log("Server is running on port 8000");
  });
};
start();
