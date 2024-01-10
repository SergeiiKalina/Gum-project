import { Outlet } from "react-router-dom"
import Header from "../header/Header"

import React from "react"

function MyLayouts(): React.JSX.Element {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}
export default MyLayouts
