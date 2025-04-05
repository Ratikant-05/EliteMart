import express from 'express';
import dotenv from 'dotenv';
import connectDB from './lib/db.js';
import cookieParser from 'cookie-parser'; // allow you to parse the cookie values
import cors from 'cors';
import authRoute from './Routes/authRoute.js';
import productRoute from './Routes/productRoute.js'
import cartRoute from './Routes/cartRoute.js';
import orderRoute from './Routes/orderRoute.js';
dotenv.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials:true
}))
app.use(express.json());
app.use(cookieParser());

app.use('/auth',authRoute);
app.use('/product',productRoute)
app.use('/cart',cartRoute)
app.use('/order',orderRoute)


app.listen(PORT,()=>{
  console.log(`Listening to port ${PORT}`);
  connectDB();
});