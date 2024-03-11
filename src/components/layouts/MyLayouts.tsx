import React, { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import Header from "../header/Header"
import Footer from "../Footer/Footer"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

function MyLayouts(): React.JSX.Element {
    const isAuth = useSelector((state: RootState) => state.authSlice.isAuth)
    const navigate = useNavigate()
    useEffect(() => {
        if (!isAuth) {
            navigate("/")
        }
    }, [isAuth])
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
export default MyLayouts
