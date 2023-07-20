import FormGeneratorTraining from './FormGeneratorTrening'
import FinishedTraining from './FinishedTraining'
import { useState } from 'react'
import TrainingPlanText from './TrainingPlanText'

import style from './generatorTraining.module.scss'

function GeneratorTraining() {
    const [arr, setArr] = useState([])
    const [bul, setBul] = useState(false)
    const [dataForm, setDataForm] = useState({})
    const [bulTextArea, setBulTextArea] = useState(false)

    const handelDataForm = (obj) => {
        setDataForm(obj)
    }
    const handleDataChange = (newArr) => {
        setArr(newArr)
    }
    const handlerBulChange = (newBul) => {
        setBul(newBul)
        heandelShowTextArea()
    }

    const heandelShowTextArea = () => {
        setBulTextArea((prev) => !prev)
    }

    return (
        <div>
            <h2 className={style.header}>Generator Form</h2>
            <div className={style.block}>
                {!bul && (
                    <FormGeneratorTraining
                        onDataChange={handleDataChange}
                        onBulChange={handlerBulChange}
                        plan={arr}
                        handelDataForm={handelDataForm}
                    />
                )}

                <section className={style.section}>
                    {bul ? (
                        <FinishedTraining
                            value={arr}
                            onDataChange={handleDataChange}
                            onShowTextArea={heandelShowTextArea}
                            onBulChange={handlerBulChange}
                            bulTextArea={bulTextArea}
                            plan={arr}
                        />
                    ) : (
                        ''
                    )}
                    {bulTextArea ? <TrainingPlanText plan={arr} /> : ''}
                </section>
            </div>
        </div>
    )
}
export default GeneratorTraining
