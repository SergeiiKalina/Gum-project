import { Outlet } from "react-router-dom"
import Header from "../header/Header.tsx"
import Footer from "../footer/Footer.tsx"
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
