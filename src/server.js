import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser'; // allow you to parse the cookie values
import cors from 'cors';
import authRoute from './Routes/authRoute.js';
dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.use('/auth',authRoute);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`);
  connectDB();
});