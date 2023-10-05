import { Outlet } from "react-router-dom"
import Header from "../header/Header.tsx"

function Mylayouts() {
    return (
        <>
            <Header />

            <Outlet />
        </>
    )
}
export default Mylayouts
