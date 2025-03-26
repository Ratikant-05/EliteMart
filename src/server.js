import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser'; // allow you to parse the cookie values
import cors from 'cors';
dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());

const PORT = process.env.PORT;

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))

app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`);
  connectDB();
});