import express from "express";
import dotenv from 'dotenv';
import 'colors'
import morgan from "morgan";
import cors from "cors"




//config env var
dotenv.config()


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

//routes

app.get("/", (req, res) => {
  res.send("<h1>Node Server Running</h1>");
});

//port no

const PORT = process.env.PORT || 5000;

//run server

app.listen(PORT, () => {
  console.log(`Node server running in ${process.env.NODE_ENV} Mode On Port${PORT}`.bgCyan.white);
});
