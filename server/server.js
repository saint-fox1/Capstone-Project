import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import categoriesRouter from "./routes/categories.js";
import questionsRouter from "./routes/questions.js";

dotenv.config();
const { PORT } = process.env;

const app = express(); 
app.use(cors()); 
app.use(express.json()); 
app.use("/categories", categoriesRouter);
app.use("/questions", questionsRouter);

app.listen(PORT, ()=>{
    console.log("I am listening")
});