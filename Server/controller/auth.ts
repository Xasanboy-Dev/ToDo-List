import { Request, Response } from "express";
import { Sign } from "../database/token";
import { createUser, findUserByPhoneNumber } from "../database/user";

export async function postLogin(req: Request, res: Response) {
  try {
    const { phoneNumber } = req.body;
    if (phoneNumber) {
      const user = await findUserByPhoneNumber(phoneNumber);
      if (user) {
        const token = Sign(user.name, user.surname, user.phoneNumber, user.id);
        return res.status(200).json({ message: "Hello " + user.name, token });
      } else {
        return res
          .status(404)
          .json({ message: "User not fouund! Please try again later!" });
      }
    } else {
      return res
        .status(400)
        .json({ message: "You must to fill all the gaps!" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(500).json({ message: "Internal error" });
  }
}

export async function Register(req: Request, res: Response) {
  try {
    const { country, name, number: phoneNumber, surname } = req.body;
    if (country && name && surname && name && phoneNumber) {
      const checkUserExist = await findUserByPhoneNumber(phoneNumber);
      if (!checkUserExist) {
        const user = await createUser(country, name, phoneNumber, surname);
        return res
          .status(201)
          .json({ message: "Registered succesfully!", user });
      } else {
        return res.status(400).json({ message: "User already exist!" });
      }
    } else {
      return res.status(400).json({ message: "Please fill all the gaps!" });
    }
  } catch (error: any) {
    console.log(error.mesage);
    res.status(500).json({ message: "Internal error" });
  }
}
