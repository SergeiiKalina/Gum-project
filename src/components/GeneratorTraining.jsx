import FormGeneratorTraining from "./FormGeneratorTraining"
import FinishedTraining from "./FinishedTraining"
import TrainingPlanText from "./TrainingPlanText"
import style from "./generatorTraining.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { changeBulTextArea, writeArr } from "../store/generatorTrainingReduser"
import React from "react"

function GeneratorTraining() {
    const dispatch = useDispatch()
    const bul = useSelector((state) => state.training.bul)
    const bulTextArea = useSelector((state) => state.training.bulTextArea)

    const handlerShowTextArea = () => {
        if (bulTextArea) {
            dispatch(changeBulTextArea(false))
        }
        if (!bulTextArea) {
            dispatch(changeBulTextArea(true))
        }
    }

    return (
        <div style={{ height: "100vh", margin: "0 auto" }}>
            <h2 className={style.generatorTrainingHeader}>Generator Form</h2>
            <div className={style.block}>
                {!bul && <FormGeneratorTraining />}

                <section className={style.section}>
                    {bul ? (
                        <FinishedTraining
                            onShowTextArea={handlerShowTextArea}
                            bulTextArea={bulTextArea}
                        />
                    ) : (
                        ""
                    )}
                    {bulTextArea ? <TrainingPlanText /> : ""}
                </section>
            </div>
        </div>
    )
}
export default GeneratorTraining
