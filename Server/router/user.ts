import { Router } from "express";
import {
  createName,
  deleteuserById,
  editUserById,
  getAllUsers,
  getOneUserByid,
  getUserByToken,
} from "../controller/user";
const router = Router();

router.get("/", getAllUsers);
router.get("/token", getUserByToken);
router.get("/:id", getOneUserByid);
router.put("/:id", editUserById);
router.delete("/:id", deleteuserById);
router.post("/name", createName);

export default router;
