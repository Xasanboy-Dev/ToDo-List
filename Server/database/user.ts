import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function checkUserExistById(id: number) {
  return await prisma.user.findUnique({ where: { id } });
}
