import { Outlet } from "react-router-dom";
import { todos } from "@prisma/client"
import Header from "./header";

export default function Layot({ setTodos, setClick, click }: { setTodos: (todos: todos[]) => any, setClick: (click: Boolean) => void, click: Boolean }) {
    return (
        <div>
            <Header setClick={setClick} setTodos={setTodos} />
            <Outlet />
        </div>
    )
}