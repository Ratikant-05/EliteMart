import { Router } from "express";
import { signupController } from "../Controller/UserController.js";
const router = Router();

router.post('/signup', signupController);
// router.get('/login',()=>{
//   res.send(<h1>LoginPage</h1>)
// });
// router.get('/logout',);

export default router;