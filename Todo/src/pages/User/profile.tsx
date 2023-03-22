import { user } from "@prisma/client"
import { useEffect, useState } from "react"
import { getnameofClient } from "../../TypeScript/Index"

export default function Profile({ token }: { token: string }) {
    let [user, setUser] = useState<user>()
    let [stars, setStars] = useState("*")
    useEffect(() => {
        if (token) {
            const result = getnameofClient(token)
            result.then(res => {
                setUser(res?.user)
                let password = res?.user.password
                for (let i = 0; i < password.length; i++) {
                    setStars(stars + "*")
                    if (stars.length < password.length) {
                        stars = stars + "*"
                    }
                }
            })
        } else {
            window.location.href = '/login'
            return
        }
    }, [token])
    console.log(stars)
    return (
        <div>
            <table className="my-5 border text-center border-dark mx-auto text-2xl table-auto">
                <thead>
                    <tr>
                        <th className="flex mx-3">Your name</th>
                        <th>Your surname</th>
                        <th className="flex mx-3">Your phone number</th>
                        <th>Your passwrd</th>
                        <th className="flex mx-3">Your added names</th>
                    </tr>
                </thead>
                <tbody>
                    {user?.ownerNames.map((name: string, index: number) => {
                        return (
                            <tr>
                                <td>{index == 0 ? user?.name : ""}</td>
                                <td>{index == 0 ? user?.surname : ""}</td>
                                <td>{index == 0 ? "+" + user?.phoneNumber : ""}</td>
                                <td>{index == 0 ? stars : ""} {index == 0 ? <i className="bi bi-eye"></i> : ""}</td>
                                <td className="flex justify-content-between mx-6">{name}<i className="bi bi-eraser"></i></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}