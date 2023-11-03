import React from "react"
import "./aboutMe.scss"

function SlideForSlider(): React.JSX.Element {
    return (
        <div className="slide_for_sliderblock">
            <div className="slide_for_sliderblockImg">
                <img
                    src="./images/myphoto01.png"
                    className="slide_for_slidermainPhoto"
                    alt="exercise"
                />
            </div>
            <div className="slide_for_sliderblock_paragraph">
                <p className="slide_for_sliderparagraphed">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Expedita repellendus, necessitatibus maxime sed molestias a
                    vero accusamus.
                </p>
            </div>
        </div>
    )
}

export default SlideForSlider
