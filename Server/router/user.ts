import { Router } from "express";
import {
  deleteuserById,
  editUserById,
  getAllUsers,
  getOneUserByid,
} from "../controller/user";
const router = Router();

router.get("/", getAllUsers);
router.get("/:id", getOneUserByid);
router.put("/:id", editUserById);
router.delete("/:id", deleteuserById);

export default router;
