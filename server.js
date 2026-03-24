import express from "express";
import dotenv from "dotenv";
import "colors";
import morgan from "morgan";
import cors from "cors";
import testRoutes from "./routes/testRoutes.js";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import webMessageRoutes from "./routes/webMessageRoutes.js";

//config env var
dotenv.config();

//database
connectDB();

//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

//routes
app.use("/api/v1/test", testRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/doctor", doctorRoutes);
app.use("/api/v1/webmessage", webMessageRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Node Server Running</h1>");
});

//port no

const PORT = process.env.PORT || 5000;

//run server

app.listen(PORT, () => {
  console.log(
    `Node server running in ${process.env.NODE_ENV} Mode On Port${PORT}`.bgCyan
      .white,
  );
});
