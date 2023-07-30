import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { writeTxtPlan } from '../store/generatorTreiningReduser'
import style from './trainingPlanText.module.css'

function TrainingPlanText() {
    const plan = useSelector((state) => state.training.arr)
    let title = '\xA0\xA0 Training plan \n'
    let newPlan = useMemo(() => plan, [plan])
    const dispatch = useDispatch()
    let str = useSelector((state) => state.training.textPlan)
    useEffect(() => {
        str = ''
        newPlan.forEach((element, i) => {
            str +=
                '\xA0\xA0' +
                Number(i + 1) +
                '.' +
                '\xA0' +
                element.title +
                ' ' +
                '-' +
                ' ' +
                '4x15' +
                '\n'
        })
        dispatch(writeTxtPlan(str))
    }, [newPlan])

    return (
        <div
            style={{
                width: '100%',
                height: 'auto',
                display: 'flex',
                margin: '0 auto',
            }}
        >
            <textarea
                value={str ? title + str : '\xA0\xA0 No Training plan'}
                className={style.textarea}
                readOnly
            ></textarea>
        </div>
    )
}

export default TrainingPlanText
