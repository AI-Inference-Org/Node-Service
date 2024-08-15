import { Router } from "express";
import { signup, signIn } from "../controllers/authController";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signIn);
export default router;
