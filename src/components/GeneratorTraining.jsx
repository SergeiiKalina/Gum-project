import FormGeneratorTraining from './FormGeneratorTrening'
import FinishedTraining from './FinishedTraining'
import { useState } from 'react'
import TrainingPlanText from './TrainingPlanText'

function GeneratorTraining() {
    const [arr, setArr] = useState([])
    const [bul, setBul] = useState(false)

    const handleDataChange = (newArr) => {
        setArr(newArr)
    }
    const handlerBulChange = (newBul) => {
        setBul(newBul)
    }

    return (
        <div>
            <h2 style={{ fontSize: '30px' }}>Generator Form</h2>
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: '40% 30% 30%',
                    gridRowGap: '3em',
                    gridColumnGap: '2rem',
                    margin: '16px 0 0 0',
                }}
            >
                <FormGeneratorTraining
                    onDataChange={handleDataChange}
                    onBulChange={handlerBulChange}
                    plan={arr}
                />
                {bul ? (
                    <FinishedTraining
                        value={arr}
                        onDataChange={handleDataChange}
                    />
                ) : (
                    ''
                )}
                {bul ? <TrainingPlanText plan={arr} /> : ''}
            </div>
        </div>
    )
}
export default GeneratorTraining
