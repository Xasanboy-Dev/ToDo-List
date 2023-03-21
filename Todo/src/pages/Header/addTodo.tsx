import { useEffect, useState } from "react"
import { addName, getUserDataWithToken } from "../../TypeScript/Index"

export default function AddTodo({ name }: { name: string }) {
    let [user, setUser] = useState<any>()
    let [selectedName, setSelectedName] = useState("")
    let [owner, setOwnernames] = useState<any>()
    useEffect(() => {
        const result = getUserDataWithToken(localStorage.getItem("hello")!, setUser)
        result.then(res => {
            setUser(res[0])
            setOwnernames(res[1].ownerNames)
        })
    }, [])
    return (
        <div className="text-2xl">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>When</th>
                        <th>Created Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <select onChange={(e) => {
                                if (e.target.value !== name && !owner.includes(e.target.value)) {
                                    let name = prompt("Enter your next name:")
                                    if (name) {
                                        setSelectedName(name)
                                        const result = addName(name, localStorage.getItem("hello")!)
                                        result.then(res => {
                                            alert(res)
                                            window.location.href = window.location.href
                                            e.preventDefault()
                                        }).catch(err => {
                                            alert(err.response.data.message)
                                        })
                                    }
                                } else {
                                    setSelectedName(e.target.value)
                                }
                            }}>
                                <option>{name}</option>
                                {owner ? owner.map((names: string) => {
                                    return (
                                        <option className="flex justify-content-between">{names}</option>
                                    )
                                }) : ""}
                                <option>+ Add name</option>
                            </select>
                        </td>
                        <td>
                            <select >
                                <option>Mondays</option>
                                <option>Tuesdays</option>
                                <option>Wednesdays</option>
                                <option>Thursdays</option>
                                <option>Fridays</option>
                                <option>Saturdays</option>
                                <option>Sundays</option>
                                <option>Recently</option>
                                <option>Never</option>
                                <option>Always</option>
                                <option>Sometimes</option>
                            </select>
                        </td>
                        <td>
                            <select>
                                <option>Today</option>
                                <option>Yestarday</option>
                                <option>Tomorrow</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <textarea style={{ height: innerHeight }} className={`w-full border border-dark`}
                placeholder={`Write some tasks for ${selectedName ? selectedName : name}`}>

            </textarea>
        </div>
    )
}