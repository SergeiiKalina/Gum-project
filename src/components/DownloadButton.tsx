import React from "react"
import { useSelector } from "react-redux"
import { ITraining } from "../data/data"
import "./downloadButton.css"
interface IStateDownloadButton {
    training: {
        arr: ITraining[]
    }
}

function DownloadButton(): React.JSX.Element {
    const plan = useSelector(
        (state: IStateDownloadButton) => state.training.arr
    )
    const handleDownload = () => {
        let str = ""
        for (let i = 0; i < plan.length; i++) {
            str += plan[i].title + "-" + "4x15" + "\n"
        }
        const content = str
        const filename = "Training Plan.txt"
        const element = document.createElement("a")
        const file = new Blob([content], { type: "text/plain" })
        element.href = URL.createObjectURL(file)
        element.download = filename
        document.body.appendChild(element)
        element.click()
        document.body.removeChild(element)
    }

    return (
        <div className="download_button_block">
            <button onClick={handleDownload} className="download_button_btn">
                Download
            </button>
        </div>
    )
}

export default DownloadButton
