import FormGeneratorTraining from "../FormGenerationTraining/FormGeneratorTraining.tsx"
import FinishedTraining from "../FinishedTraining/FinishedTraining"
import TrainingPlanText from "../../TrainingPlanText.tsx"
import "./generatorTraining.scss"
import { useDispatch, useSelector } from "react-redux"
import { changeBulTextArea } from "../../../store/generatorTrainingReducer"
import React from "react"

interface ITextArea {
    training: {
        bul: boolean
        bulTextArea: boolean
    }
}

function GeneratorTraining() {
    const bul: boolean = useSelector((state: ITextArea) => state.training.bul)
    const bulTextArea: boolean = useSelector(
        (state: ITextArea) => state.training.bulTextArea
    )

    return (
        <div>
            <h2 className="generator_training_generatorTrainingHeader">
                Generator Form
            </h2>
            <div className="generator_training_block">
                {!bul && <FormGeneratorTraining />}

                <section className="generator_training_section">
                    {bul ? <FinishedTraining /> : ""}
                    {bulTextArea ? <TrainingPlanText /> : ""}
                </section>
            </div>
        </div>
    )
}
export default GeneratorTraining
