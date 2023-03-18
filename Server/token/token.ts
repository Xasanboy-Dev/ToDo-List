import jwt from "jsonwebtoken";

const SECRET = process.env.X_KEY;

export function Verify(token: string) {
  return jwt.verify(token, SECRET!);
}

export function Sign(
  name: string,
  lastname: string,
  phoneNumber: string,
  todoList: number[],
  userID: number
) {
  const payload = { name, lastname, phoneNumber, todoList };
  return jwt.sign(payload, SECRET!);
}
