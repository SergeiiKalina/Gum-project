import { useState } from 'react'
import { SlCheck, SlClose } from 'react-icons/sl'
import style from './finishedTraining.module.css'

function FinishedTraining({ value, onDataChange }) {
    const [arrTraining, setArrTraining] = useState(value)

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
                        {el.title}{' '}
                        <div>
                            <SlCheck
                                style={
                                    el.isComplited
                                        ? {
                                              color: 'lightgreen',
                                              cursor: 'pointer',
                                          }
                                        : {
                                              color: 'darkblue',
                                              cursor: 'pointer',
                                          }
                                }
                                onClick={() => toggleTodo(el.id)}
                            />
                            <SlClose
                                onClick={() => deleteExercises(el.id)}
                                style={{
                                    color: 'red',
                                    cursor: 'pointer',
                                    padding: '0 0 0 10px',
                                }}
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FinishedTraining
