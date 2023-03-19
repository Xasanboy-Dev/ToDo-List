import { Request, Response } from "express";
import {
  addTodo,
  deleteTodo,
  findAllTodos,
  findTodoByID,
  findTodosForByUserId,
  updateTodo,
} from "../database/todos";
import { Verify } from "../database/token";
import { findSavedUserByToDoId } from "../database/user";

export async function getTodosForUser(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const ValidateToken: any = Verify(token);
      if (ValidateToken) {
        return await findTodosForByUserId(ValidateToken.id);
      }
    } else {
      return res.status(401).json({});
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function getAllTodos(req: Request, res: Response) {
  try {
    const todoList = await findAllTodos();
    return res.status(200).json({ message: "All todos", todos: todoList });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function getTodoById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    if (token && id && Number(id).toString() !== "NaN") {
      const ValidateToken: any = Verify(token);
      if (ValidateToken) {
        const todoBYId = await findTodoByID(+id);
        if (todoBYId) {
          return res
            .status(200)
            .json({ message: "Todo with ID: " + id, todo: todoBYId });
        } else {
          return res.status(404).json({ message: "Todo not found!" });
        }
      }
    } else {
      return res.status(401).json({ message: "You must to login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function createTodo(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { text, createdDate, title } = req.body;
    if (token && text && title) {
      const ValidateToken: any = Verify(token);
      if (ValidateToken) {
        const addedTodo = addTodo(
          ValidateToken.name,
          ValidateToken.id,
          text,
          createdDate ? createdDate : "",
          title
        );
        return res.status(201).json({ message: "Todo added succesfully!" });
      }
    } else {
      return res.status(404).json({ message: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function editTodo(req: Request, res: Response) {
  try {
    const { todoID } = req.params;
    const token = req.headers.authorization;
    const { text, createdDate, title } = req.body;
    if (todoID && token && Number(todoID).toString() !== "NaN") {
      const ValidateToken = Verify(token);
      const todoByid = await findTodoByID(+todoID);
      if (ValidateToken && todoByid) {
        const editedTodo = await updateTodo(
          todoByid.id,
          text ? text : todoByid.text,
          createdDate ? createdDate : todoByid.createdDate,
          title ? title : todoByid.title
        );
        return res.status(200).json({ mesage: "Updated succesfully" });
      }
    } else {
      return res.status(401).json({ message: "UYou must to Login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function removeTodo(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { todoID } = req.params;
    if (token && todoID && Number(todoID).toString() !== "NaN") {
      const ValidateToken = Verify(token);
      if (ValidateToken) {
        const SavedUsers = await findSavedUserByToDoId(+todoID);
        const deletedToDo = await deleteTodo(+todoID, SavedUsers);
        return res
          .status(200)
          .json({ message: "Todo deleted succesfully", todo: deletedToDo });
      }
    } else {
      return res.status(401).json({ message: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(500).json({ message: "Internal error" });
  }
}
