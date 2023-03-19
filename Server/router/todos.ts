import { Router } from "express";
import {
  createTodo,
  editTodo,
  getAllTodos,
  getTodoById,
  removeTodo,
} from "../controller/toDos";

const router = Router();

router.get("/", getAllTodos);
router.get("/:id", getTodoById);
router.post("/", createTodo);
router.put("/:todoID", editTodo);
router.delete("/:todoID", removeTodo);

export default router;
