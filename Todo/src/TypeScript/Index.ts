import axios from "axios";
import { todos, user } from "@prisma/client";
const token = localStorage.getItem("hello");

export async function Searching(text: string) {
  const result = await axios.get(`http://localhost:8080/todo/search`, {
    headers: { Authorization: text },
  });
  return result.data;
}

export function onSelect(
  todo: todos,
  setSelect: (todos: number[]) => void,
  select: number[]
) {
  if (!select.includes(todo.id)) {
    setSelect([...select, todo.id]);
    return;
  } else {
    console.log([todo.id, select]);
  }
}

export async function getAllTodos() {
  return await axios.get(`http://localhost:8080/todo`);
}

export async function getnameofClient(token: string) {
  if (token) {
    const result = await axios.get("http://localhost:8080/user/token", {
      headers: { Authorization: token },
    });
    return result.data.token;
  }
}

export async function addName(name: string, token: string) {
  if (token) {
    console.log(token);
    const result = await axios.post(
      `http://localhost:8080/user/name`,
      { name },
      {
        headers: { Authorization: token },
      }
    );
    return result.data.message;
  } else {
    alert("Login please!");
    return (window.location.href = "/login");
  }
}

export async function getUserDataWithToken(
  token: string,
  setUser: (user: user) => void
) {
  if (token) {
    const result = await axios.get(`http://localhost:8080/user/token`, {
      headers: { Authorization: token },
    });
    return [result.data.token, result.data.user];
  } else {
    return (window.location.href = "/login");
  }
}
