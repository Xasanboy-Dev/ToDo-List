import jwt from "jsonwebtoken";

const secret = process.env.SECRET;

export function Sign(
  name: string,
  surname: string,
  phoneNumber: string,
  ownerName: string[],
  id: number
) {
  const payload = { ownerName, name, surname, phoneNumber, id };
  return jwt.sign(payload, secret!);
}

export function Verify(token: string) {
  return jwt.verify(token, secret!);
}
