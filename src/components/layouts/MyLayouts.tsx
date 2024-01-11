import React from "react"
import { Outlet } from "react-router-dom"
import Header from "../header/Header"

function MyLayouts(): React.JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default MyLayouts
