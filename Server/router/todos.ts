import { Router } from "express";
import { createTodo, getToDos } from "../controller/toDos";

const router = Router();

router.get("/", getToDos);
router.post("/:id",createTodo);
router.put("/:id",);
router.delete("/:id",);

export default router;
