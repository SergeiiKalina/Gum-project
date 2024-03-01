import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../Footer/Footer"

function MyLayouts(): React.JSX.Element {
    const bodyClass = document.querySelector(".touch")
    console.log(bodyClass)
    return (
        <>
            <Header />
            <Outlet />
            {bodyClass ? "" : <Footer />}
        </>
    )
}
export default MyLayouts
