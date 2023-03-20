import { PrismaClient, user } from "@prisma/client";
const prisma = new PrismaClient();

export async function findUserById(userId: number) {
  return await prisma.user.findUnique({ where: { id: userId } });
}

export async function findUserByPhoneNumber(phoneNumber: string) {
  return await prisma.user.findUnique({ where: { phoneNumber } });
}

export async function findAllUsers() {
  return await prisma.user.findMany();
}

export async function updateUser(
  userId: number,
  name: string,
  phoneNumber: string,
  savedTodos: number[],
  surname: string,
  todos: number[],
  country: any
) {
  return await prisma.user.update({
    data: {
      country,
      name,
      phoneNumber,
      savedTodos,
      surname,
      todos,
    },
    where: { id: userId },
  });
}

export async function findSavedUserByToDoId(toDoId: number) {
  const allUsers = await findAllUsers();
  let arr = allUsers.filter((user: user) => user.savedTodos.includes(toDoId));
  let usersId: number[] = [];
  for (let i in arr) {
    usersId.push(arr[i].id);
  }
  return usersId;
}

export async function removeUserById(id: number) {
  return await prisma.user.delete({ where: { id } });
}

export async function createUser(
  country: string,
  name: string,
  phoneNumber: string,
  surname: string,
  password: string
) {
  return await prisma.user.create({
    data: {
      country,
      name,
      phoneNumber,
      surname,
      password,
    },
  });
}
