import { Outlet } from "react-router-dom"
import Header from "../header/Header.tsx"
import Footer from "../footer/Footer.tsx"

function Mylayouts() {
    return (
        <>
            <Header />

            <Outlet />
            <Footer />
        </>
    )
}
export default Mylayouts
