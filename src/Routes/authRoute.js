import { Router } from "express";
import { loginController, logoutController, signupController } from "../Controller/UserController.js";
const router = Router();

// signup route
router.post('/signup', signupController);

// login route
router.post('/login', loginController);

// logout route
router.post('/logout', logoutController);

export default router;