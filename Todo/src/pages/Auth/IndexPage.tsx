import { useState, useEffect } from "react"
import { todos } from "@prisma/client"
import { getAllTodos } from "../../TypeScript/Index"
export default function IndexPage() {
    let [todos, setTodos] = useState<todos[]>([])
    useEffect(() => {
        const result = getAllTodos()
        result.then(res => {
            setTodos(res.data.todos)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }, [])
    return (
        <div>
            <div className="flex justify-content-center text-3xl py-2">
                <h1>Todo App</h1>
            </div>
            {todos.map((todo: todos) => {
                return (
                    <div className="border flex px-5 my-4 border-dark bg-light w-[70%] mx-auto  rounded">
                        <div className="">
                            <h1 className="mx-5 text-2xl">Whom: <span className="text-orange-700">{todo.ownerName}</span></h1>
                            <h2 className="mx-5 text-2xl">Title: <span className="text-purple-700">{todo.title}</span></h2>
                        </div>
                        <div className="flex items-center">
                            <h1>What work: {todo.text}</h1>
                            <h1></h1>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}