import { useEffect, useState } from "react"
import { todos } from "@prisma/client"
import { getnameofClient, Searching } from "../../TypeScript/Index"

export default function Header({ setTodos, setClick }: { setTodos: (todos: todos[]) => any, setClick: (click: Boolean) => void }) {
    const token = localStorage.getItem("hello")
    let [text, setText] = useState("")
    let [userExist, setUserExist] = useState(Boolean)
    let [user, setUser] = useState<any>()
    useEffect(() => {
        if (token) {
            const result = getnameofClient(token)
            result.then(res => {
                setUser(res!.user)
                setUserExist(true)
            }).catch(err => {
                setUserExist(false)
            })
        }
    }, [])
    return (
        <div>
            <div className="flex justify-content-between py-2">
                <div className="items-center flex gap-2 mx-5">
                    <a href="/"><i className="text-3xl bi bi-house"></i></a>
                    <div className="">
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            Searching(text).then(res => [
                                setTodos(res)
                            ]).catch(err => {
                                setTodos(err)
                            })
                        }}>
                            <input
                                onChange={(e) => { setText(e.target.value) }}
                                className="border boder-dark p-2 rounded text-lg"
                                placeholder="Search something..." />
                            <button type="submit" className="p-2 border border-dark rounded mx-2">Search</button>
                        </form>
                    </div>
                </div>
                <div className="">
                    <div
                        style={{ display: userExist ? "flex" : "none" }}
                        className="items-center flex gap-2 mx-5">
                        <span onClick={() => setClick(true)} className="cursor-pointer border px-2 bg-green-700 text-light text-2xl rounded-full border-dark">+</span>
                        <a href="/profile" className="border border-dark px-2 py-2 rounded cursor-pointer">
                            <h1>{user?.name}</h1>
                        </a>
                    </div>
                    <div
                        style={{ display: userExist ? "none" : "flex" }}
                        className="flex justfy-content-center mx-5 gap-2">
                        <a href="/register" className="border cursor-pointer border-dark py-1 px-3 rounded text-light text-xl bg-green-700">Reister</a>
                        <a href="/login" className="border cursor-pointer border-dark py-1 px-3 rounded text-light text-xl bg-red-700">Login</a>
                    </div>
                </div>
            </div>
            <div>
                <hr className="border borderdark" />
            </div>
        </div>
    )
}