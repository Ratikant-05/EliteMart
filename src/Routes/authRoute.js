import { Router } from "express";
import { signupController } from "../Controller/UserController.js";
const router = Router();

router.post('/signup', signupController);

export default router;