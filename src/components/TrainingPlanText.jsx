import { useEffect, useMemo, useState } from 'react'
import style from './trainingPlanText.module.css'

function TrainingPlanText({ plan }) {
    let title = '\xA0\xA0 Training plan \n'
    let newPlan = useMemo(() => plan, [plan])
    let [str, setStr] = useState('')

    useEffect(() => {
        str = ''
        newPlan.forEach((element) => {
            str += '\xA0\xA0' + element.title + ' ' + '-' + ' ' + '4x15' + '\n'
        })
        setStr(str)
    }, [newPlan])

    return (
        <div>
            <textarea
                value={str ? title + str : '\xA0\xA0 No Training plan'}
                className={style.textarea}
                readOnly
            ></textarea>
        </div>
    )
}

export default TrainingPlanText
