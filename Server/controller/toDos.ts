import { Request, Response } from "express";
import { findTodos, writeTodo } from "../database/todos";
import { checkUserExistById } from "../database/user";
import { Verify } from "../token/token";

export async function getToDos(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const validateToken = Verify(token);
      if (validateToken) {
        const allTodos = await findTodos();
        res.status(200).json({ message: "All Todos!" });
      } else {
        return res.status(401).json({ mesage: "You must to Login!" });
      }
    } else {
      return res.status(401).json({ mesage: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function createTodo(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const validateToken: any = Verify(token);
      if (validateToken) {
        const { id } = req.params;
        if (id) {
          const user = await checkUserExistById(+id);
          if (user) {
          } else {
            return res.status(404).json({ message: "User not exist!" });
          }
        } else {
          return res.status(401).json({ message: "Yu must to Login!" });
        }
        return res.status(201).json({ message: "Tdod created succesfully!" });
      } else {
        return res.status(401).json({ mesage: "You must to Login!" });
      }
    } else {
      return res.status(401).json({ mesage: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(200).json({ message: "Internal error" });
  }
}

export async function updatedTodo(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    if (token) {
      const validateToken: any = Verify(token);
      if (validateToken) {
      } else {
        return res.status(401).json({ mesage: "You must to Login!" });
      }
    } else {
      return res.status(401).json({ mesage: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}
