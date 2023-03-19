import { Request, Response } from "express";
import { Verify } from "../database/token";
import {
  findAllUsers,
  findUserById,
  removeUserById,
  updateUser,
} from "../database/user";

export async function getAllUsers(req: Request, res: Response) {
  try {
    const allUsers = await findAllUsers();
    return res.status(200).json({ mesage: "All users", users: allUsers });
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function getOneUserByid(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    if (token && id && Number(id).toString() !== "NaN") {
      const ValidateToken = Verify(token);
      if (ValidateToken) {
        const user = await findUserById(+id);
        return res.status(200).json({ message: "User with id: " + id, user });
      }
    } else {
      return res.status(401).json({ message: "Internal error" });
    }
  } catch (error: any) {
    console.log(error.message);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function editUserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    const { country, name, surname, phoneNumber, savedTodos } = req.body;
    if (token && id && Number(id).toString() !== "NaN") {
      let ValidateToken = Verify(token);
      if (ValidateToken) {
        const user = await findUserById(+id);
        if (user) {
          const editeduser = await updateUser(
            user.id,
            name ? name : user.name,
            phoneNumber ? phoneNumber : user.phoneNumber,
            savedTodos ? savedTodos : user.savedTodos,
            surname ? surname : user.surname,
            user.todos,
            country ? country : user.country
          );
          return res.status(200).json({
            message: "User edited with ID: " + id,
            user: editeduser,
          });
        } else {
          return res.status(404).json({ message: "User not Fouund!" });
        }
      }
    } else {
      return res.status(401).json({ message: "You must to Login!" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function deleteuserById(req: Request, res: Response) {
  try {
    const token = req.headers.authorization;
    const { id } = req.params;
    if (token && id && Number(id).toString() !== "NaN") {
      const ValidateToken = Verify(token);
      if (ValidateToken) {
        const user = await findUserById(+id);
        if (user && user.id == +id) {
          const removeduser = await removeUserById(user.id);
          return res.status(200).json({
            message: "User deleted succesfully",
            user: removeduser,
          });
        } else {
          return res.status(404).json({ message: "User not Fouund!" });
        }
      }
    } else {
      return res.status(400).json({ message: "You have some problems" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(401).json({ message: "You must to Login!" });
  }
}
