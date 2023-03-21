import AddTodo from "../Header/addTodo"
import { useState, useEffect } from "react"
import { todos } from "@prisma/client"
import { getAllTodos, getnameofClient } from "../../TypeScript/Index"
export default function IndexPage({ click, setClick }: { click: Boolean, setClick: (click: Boolean) => void }) {
    let [user, setUser] = useState<{ name: string, surname: string, phoneNumber: string, id: number }>()
    let [todos, setTodos] = useState<todos[]>([])
    let token = localStorage.getItem("hello")
    useEffect(() => {
        const user = getnameofClient(token!)
        user.then(res => {
            setUser(res)
        })
        const result = getAllTodos()
        result.then(res => {
            setTodos(res.data.todos)
        }).catch(err => {
            console.log(err.response.data.message)
        })
    }, [])
    return (
        <div >
            <div onClick={() => setClick(false)} className={`opacity-${click ? "5" : "100"}`}>
                <div className="flex  justify-content-center text-3xl py-2">
                    <h1>Todo App</h1>
                </div>
                <div>
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
            </div>
            <div style={{ display: click ? "flex" : "none", height: innerHeight - 150 }}
                className={`border border-dark fixed z-10 mx-[10%]
                justify-content-center w-[80%]  my-[-25%] z-20 rouunded `}>
                <AddTodo name={user ? user.name : ""} />
            </div>
        </div >
    )
}