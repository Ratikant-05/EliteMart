import express from "express";
import {createOrder} from '../Controller/OrderController.js'
import protectRoute from "../Middleware/protectRoute.js";

const router = express.Router();

router.post("/createOrder", protectRoute, createOrder);

export default router;
