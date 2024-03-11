import { IoIosArrowBack } from "react-icons/io"
import { useLocation, useNavigate } from "react-router-dom"
import "./backButton.scss"

function BackButton() {
    const location = useLocation()
    const currentURL = location.pathname

    const navigate = useNavigate()
    return currentURL === "/setup" ||
        currentURL === "/main-page" ||
        currentURL === "/personal-data" ||
        currentURL === "/" ? (
        <div></div>
    ) : (
        <button className="button_back" onClick={() => navigate(-1)}>
            <IoIosArrowBack />
        </button>
    )
}

export default BackButton
