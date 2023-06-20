import { useEffect, useMemo, useState } from 'react'
import { SlCheck, SlClose } from 'react-icons/sl'
import DownloadButton from './DownloadButton'
import style from './finishedTraining.module.scss'

function FinishedTraining({
    value,
    onDataChange,
    onShowTextArea,
    onBulChange,
    bulTextArea,
    plan,
}) {
    const [arrTraining, setArrTraining] = useState(value)
    let newValue = useMemo(() => value, [value])
    useEffect(() => {
        setArrTraining(newValue)
    }, [newValue])
    const toggleTodo = (id) => {
        setArrTraining(
            arrTraining.map((el) =>
                el.id === id
                    ? { ...el, isComplited: !el.isComplited }
                    : { ...el }
            )
        )
    }

    const deleteExercises = (id) => {
        setArrTraining(arrTraining.filter((el) => el.id != id))
        onDataChange(arrTraining.filter((el) => el.id != id))
    }

    return (
        <div className={style.container}>
            <h2 className={style.head}>
                Exercises complited:
                <span>
                    {arrTraining.filter((el) => el.isComplited == true).length}
                </span>
            </h2>
            <ul className={style.list}>
                {arrTraining.map((el) => (
                    <li key={el.id}>
                        {el.title}
                        <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                            <SlCheck
                                style={
                                    el.isComplited
                                        ? {
                                              color: '#B5B8B1',
                                              cursor: 'pointer',
                                          }
                                        : {
                                              color: ' #00ff00',
                                              cursor: 'pointer',
                                          }
                                }
                                className={style.buttonTodo}
                                onClick={() => toggleTodo(el.id)}
                            />
                            <SlClose
                                onClick={() => deleteExercises(el.id)}
                                style={{
                                    color: 'red',
                                    cursor: 'pointer',
                                    padding: '0 0 0 10px',
                                }}
                                className={style.buttonTodo}
                            />
                        </div>
                    </li>
                ))}
            </ul>
            <section className={style.blockButton}>
                <div>
                    <button onClick={onShowTextArea}>
                        {bulTextArea ? 'Hide Text' : 'Show Text'}
                    </button>
                    <button
                        className={style.btnBacktoForm}
                        onClick={() => onBulChange(false)}
                    >
                        Back to form
                    </button>
                </div>
                {bulTextArea ? <DownloadButton plan={plan} /> : ''}
            </section>
        </div>
    )
}

export default FinishedTraining
