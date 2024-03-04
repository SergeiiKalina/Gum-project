import { IoIosArrowBack } from "react-icons/io"
import { useNavigate } from "react-router-dom"
import "./backButton.scss"

function BackButton() {
    const currentURL: string = window.location.href
        .replace("http://localhost:3000/", "")
        .replace("https://gym-project-6bll.onrender.com/", "")

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
