import { Outlet } from "react-router-dom";
import { todos } from "@prisma/client"
import Header from "./header";

export default function Layot({ setTodos }: { setTodos: (todos: todos[]) => any }) {
    return (
        <div>
            <Header setTodos={setTodos} />
            <Outlet />
        </div>
    )
}