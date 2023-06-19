import FormGeneratorTraining from './FormGeneratorTrening'
import FinishedTraining from './FinishedTraining'
import { useState } from 'react'
import TrainingPlanText from './TrainingPlanText'
import style from './generatorTraining.module.scss'

function GeneratorTraining() {
    const [arr, setArr] = useState([])
    const [bul, setBul] = useState(false)
    const [bulTextArea, setBulTextArea] = useState(false)

    const handleDataChange = (newArr) => {
        setArr(newArr)
    }
    const handlerBulChange = (newBul) => {
        setBul(newBul)
    }

    const heandelShowTextArea = () => {
        if (bulTextArea) {
            setBulTextArea(false)
        }
        if (!bulTextArea) {
            setBulTextArea(true)
        }
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
                    />
                )}

                <section className={style.section}>
                    {bul ? (
                        <FinishedTraining
                            value={arr}
                            onDataChange={handleDataChange}
                            onShowTextArea={heandelShowTextArea}
                            onBulChange={handlerBulChange}
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
