import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../Footer/Footer"
import React from "react"

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
