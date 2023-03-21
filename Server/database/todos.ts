import { PrismaClient } from "@prisma/client";
import { findUserById, updateUser } from "./user";

const prisma = new PrismaClient();

export async function findTodosForByUserId(ownerID: number) {
  return await prisma.todos.findMany({ where: { owner: ownerID } });
}

export async function findTodoByID(id: number) {
  return await prisma.todos.findUnique({ where: { id } });
}

export async function findAllTodos() {
  return await prisma.todos.findMany();
}

export async function addTodo(
  ownerName: string,
  ownerId: number,
  text: string,
  createdDate: Date,
  title: string
) {
  return await prisma.todos.create({
    data: { owner: ownerId, ownerName, text, createdDate, title },
  });
}

export async function updateTodo(
  todoId: number,
  text: string,
  createdDate: Date,
  title: string
) {
  return await prisma.todos.update({
    data: { createdDate, text, title },
    where: { id: todoId },
  });
}

export async function deleteTodo(todoId: number, userIdsForSaved: number[]) {
  for (let i in userIdsForSaved) {
    const user = await findUserById(userIdsForSaved[i]);
    if (user) {
      let upatedTodos = user.savedTodos;
      upatedTodos = upatedTodos.filter((id: number) => id !== todoId);
      let updatedUser = await updateUser(
        user.id,
        user.name,
        user.phoneNumber,
        upatedTodos,
        user.surname,
        user.todos,
        user.country
      );
    }
  }
  return await prisma.todos.delete({ where: { id: todoId } });
}

export async function findByTitle(title: string) {
  return await prisma.todos.findMany({
    where: {
      title: { contains: title },
    },
  });
}
