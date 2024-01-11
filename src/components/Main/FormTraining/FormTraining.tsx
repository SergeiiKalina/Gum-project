import React, { useState } from "react"
import { useSelector } from "react-redux"
import { GrFormDown } from "react-icons/gr"
import { IIsChecked } from "../../../store/filterTrainingSlice"
import "./formTraining.scss"

interface IState {
    filterTraining: {
        isChecked: IIsChecked
        categories: string[]
    }
}

export default function FormTraining({
    handleSubmit,
    onSubmit,
    register,
}: any): React.JSX.Element {
    const isChecked = useSelector(
        (state: IState) => state.filterTraining.isChecked
    )
    const categories = useSelector(
        (state: IState) => state.filterTraining.categories
    )
    const [rev, setRev] = useState(false)

    const reverseArrow = () => {
        setRev((prev) => !prev)
    }
    const closeCategories = () => {
        setRev(false)
    }
    return (
        <article
            className={`form_training_aside ${
                rev ? "form_training_mobile" : ""
            }`}
        >
            <button onClick={reverseArrow} className="form_training_buttonList">
                Categories
                <GrFormDown
                    className={`form_training_arrow  ${
                        rev ? `form_training_rotate` : ""
                    }`}
                />
            </button>
            <form
                className={`form_training_nav ${
                    rev ? "" : "form_training_toggleNav"
                }`}
                onChange={handleSubmit(onSubmit)}
            >
                {categories.length > 0 &&
                    categories.map((el) => {
                        let str = ""
                        for (let i = 0; i < el.length; i++) {
                            if (i === 0) {
                                str += el[i].toUpperCase()
                            } else {
                                str += el[i]
                            }
                        }

                        return (
                            <label
                                key={el}
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                {str}
                                <input
                                    type="checkbox"
                                    className="form_training_button"
                                    value={el}
                                    checked={isChecked[el] || false}
                                    {...register(el)}
                                />
                            </label>
                        )
                    })}
            </form>
            <button
                className="form_training_closeButton"
                onClick={closeCategories}
            >
                Close
            </button>
        </article>
    )
}
