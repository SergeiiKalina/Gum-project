import { SlCheck, SlClose } from 'react-icons/sl'
import { useDispatch, useSelector } from 'react-redux'
import {
    chandeCompleted,
    chandeStepForm,
    changeBul,
    changeBulTextArea,
} from '../store/generatorTreiningReduser'
import DownloadButton from './DownloadButton'
import style from './finishedTraining.module.scss'

function FinishedTraining({ onDataChange, onShowTextArea }) {
    const value = useSelector((state) => state.training.arr)
    const bulTextArea = useSelector((state) => state.training.bulTextArea)
    const dispatch = useDispatch()
    const toggleTodo = (id) => {
        dispatch(
            chandeCompleted(
                value.map((el) =>
                    el.id === id
                        ? { ...el, isComplited: !el.isComplited }
                        : { ...el }
                )
            )
        )
    }

    const deleteExercises = (id) => {
        dispatch(chandeCompleted(value.filter((el) => el.id !== id)))
        onDataChange(value.filter((el) => el.id !== id))
    }

    return (
        <div className={style.container}>
            <h2 className={style.head}>
                Exercises complited:
                <span>
                    {value.filter((el) => el.isComplited === true).length}
                </span>
            </h2>
            <ul className={style.list}>
                {value.map((el, i) => {
                    return (
                        <li
                            key={el.id}
                            className={
                                el.style ? `${style.dayTrainingStyle}` : ''
                            }
                        >
                            {el.title}
                            <div
                                style={{ display: 'flex', flexWrap: 'nowrap' }}
                            >
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
                    )
                })}
            </ul>
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
                {bulTextArea ? <DownloadButton /> : ''}
            </section>
        </div>
    )
}

export default FinishedTraining
