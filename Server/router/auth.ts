import { Router } from "express";
import { postLogin, Register } from "../controller/auth";
const router = Router();

router.post("/login", postLogin);
router.post("/register", Register);

export default router;
