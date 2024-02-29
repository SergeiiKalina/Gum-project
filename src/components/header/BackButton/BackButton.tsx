import React from "react"
import { IoIosArrowBack } from "react-icons/io"
import "./backButton.scss"
import { useNavigate } from "react-router-dom"

function BackButton() {
    const currentURL: string = window.location.href.replace(
        "http://localhost:3000/",
        ""
    )
    const navigate = useNavigate()
    return currentURL === "setup" ||
        currentURL === "main-page" ||
        currentURL === "personal-data" ? (
        <div></div>
    ) : (
        <button className="button_back" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
        </button>
    )
}

export default BackButton
