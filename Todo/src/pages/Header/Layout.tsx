import { Outlet } from "react-router-dom";
import Header from "./header";

export default function Layot() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}