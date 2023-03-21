import axios from "axios";
import { todos } from "@prisma/client";
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
