import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import React from "react"
import Footer from "../Footer/Footer"

function MyLayouts(): React.JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default MyLayouts
