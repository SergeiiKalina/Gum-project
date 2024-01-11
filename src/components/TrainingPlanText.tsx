import React, { useEffect, useMemo } from "react"
import { useDispatch, useSelector } from "react-redux"
import { writeTxtPlan } from "../store/generatorTrainingReducer"
import { ITraining } from "../data/data"
import "./trainingPlanText.css"

interface IStatePlanText {
    training: {
        arr: ITraining[][]
        textPlan: string
    }
}

function TrainingPlanText(): React.JSX.Element {
    const plan = useSelector((state: IStatePlanText) => state.training.arr)
    let title = "\xA0\xA0 Training plan \n"
    let newPlan = useMemo(() => plan, [plan])
    const dispatch = useDispatch()
    let str = useSelector((state: IStatePlanText) => state.training.textPlan)

    useEffect(() => {
        let str2 = ""
        newPlan.forEach((element) => {
            if (element.length === 1) {
                return
            }
            element.forEach((el, index) => {
                if (el.id === 0 || el.id === 10 || el.id === 20) {
                    str2 += "\n\xA0\xA0" + el.title + "\n"

                    return
                }
                str2 +=
                    "\xA0\xA0" +
                    Number(index) +
                    ".\xA0" +
                    el.title +
                    " - 4x15 \n"
            })
        })
        dispatch(writeTxtPlan(str2))
    }, [newPlan, dispatch])

    return (
        <div
            style={{
                width: "100%",
                height: "auto",
                display: "flex",
                margin: "78px auto 0 auto",
            }}
        >
            <textarea
                value={str ? title + str : "\xA0\xA0 No Training plan"}
                className="training_plan_text_textarea"
                readOnly
            ></textarea>
        </div>
    )
}

export default TrainingPlanText
