import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function findTodos() {
  return await prisma.toDos.findMany();
}

export async function writeTodo(userId: number) {}
