import { SlCheck, SlClose, SlPlus } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import { LuChevronDown } from 'react-icons/lu'
import {
    chandeCompleted,
    chandeStepForm,
    changeBul,
    changeBulTextArea,
    writeArr,
} from '../store/generatorTreiningReduser'
import DownloadButton from './DownloadButton'
import style from './finishedTraining.module.scss'
import React, { useState } from 'react'
import AddExcercise from './AddExcercise'

function FinishedTraining({ onDataChange, onShowTextArea }) {
    const value = useSelector((state) => state.training.arr)
    const bulTextArea = useSelector((state) => state.training.bulTextArea)
    const [showList, setShowList] = useState({
        0: '0',
        10: '10',
        20: '20',
    })
    const [showDialog, setShowDialog] = useState({
        0: 0,
        10: 10,
        20: 20,
    })
    const dispatch = useDispatch()
    const toggleTodo = (index, id) => {
        const clonedValue = JSON.parse(JSON.stringify(value))
        clonedValue[index] = clonedValue[index].map((el) =>
            el.id === id
                ? {
                      ...el,
                      isComplited: !el.isComplited,
                  }
                : el
        )

        dispatch(writeArr(clonedValue))
    }

    const deleteExercises = (index, id) => {
        const clonedValue = JSON.parse(JSON.stringify(value))
        clonedValue[index] = clonedValue[index].filter((el) => el.id !== id)
        dispatch(chandeCompleted(clonedValue))
        onDataChange(clonedValue)
    }

    function toggleList(num, id) {
        if (showList[num] === id) {
            setShowList({ ...showList, [num]: false })
        } else if (showList[num] === false) {
            setShowList({ ...showList, [num]: id })
        }
    }

    function toggleDialog(key, id) {
        if (showDialog[key] === id) {
            setShowDialog({ ...showDialog, [key]: false })
        } else if (showDialog[key] === false) {
            setShowDialog({ ...showDialog, [key]: id })
        }
    }

    return (
        <div className={style.container}>
            <h2 className={style.head}>
                Exercises complited:
                <span>
                    {value.filter((el) => el.isComplited === true).length}
                </span>
            </h2>

            {value.map((el, index) => {
                return (
                    <article
                        key={el[0].id}
                        className={
                            showList[el[0].id] === el[0].id.toString()
                                ? style.open
                                : null
                        }
                    >
                        <div className={style.titleButton}>
                            <button
                                className={
                                    value[index].length === 1
                                        ? style.hiddenButton
                                        : null
                                }
                                id={el[0].id}
                                onClick={(e) =>
                                    toggleList(
                                        e.currentTarget.id,
                                        e.currentTarget.id
                                    )
                                }
                            >
                                {el[0].title}
                                <LuChevronDown
                                    className={style.buttonCheckAll}
                                />
                            </button>
                            <div
                                className={style.addExcerciseBlock}
                                onClick={() => toggleDialog(el[0].id, el[0].id)}
                            >
                                <span>Add Excercice</span>
                                <SlPlus className={style.addExcercise} />
                                {showDialog[el[0].id] === el[0].id ? (
                                    <AddExcercise />
                                ) : null}
                            </div>
                        </div>
                        <ul className={style.list}>
                            {el.map((element) => {
                                if (
                                    element.id === 0 ||
                                    element.id === 10 ||
                                    element.id === 20
                                ) {
                                    return
                                }
                                return (
                                    <li key={element.id}>
                                        {element.title}

                                        <div
                                            style={{
                                                display: 'flex',
                                                flexWrap: 'nowrap',
                                            }}
                                        >
                                            <SlCheck
                                                style={
                                                    element.isComplited
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
                                                onClick={() =>
                                                    toggleTodo(
                                                        index,
                                                        element.id
                                                    )
                                                }
                                            />
                                            <SlClose
                                                onClick={() =>
                                                    deleteExercises(
                                                        index,
                                                        element.id
                                                    )
                                                }
                                                style={{
                                                    color: 'red',
                                                    cursor: 'pointer',
                                                    padding: '0 0 0 10px',
                                                }}
                                                className={style.buttonTodo}
                                            />
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </article>
                )
            })}

            <section className={style.blockButton}>
                <div>
                    <button onClick={onShowTextArea} className={style.button}>
                        {bulTextArea ? 'Hide Text' : 'Show Text'}
                    </button>
                    <button
                        className={`${style.btnBacktoForm} ${style.button}`}
                        onClick={() =>
                            dispatch(
                                changeBul(false),
                                dispatch(changeBulTextArea(false)),
                                dispatch(chandeStepForm(1))
                            )
                        }
                    >
                        Back to form
                    </button>
                </div>
                {bulTextArea ? <DownloadButton /> : null}
            </section>
        </div>
    )
}

export default FinishedTraining
