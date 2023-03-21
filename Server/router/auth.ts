import { Router } from "express";
import { checkTokenValid, postLogin, Register } from "../controller/auth";
const router = Router();

router.post("/login", postLogin);
router.post("/register", Register);
router.post("/token", checkTokenValid);

export default router;
