import React, { Suspense, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import FormTraining from './FormTraining'
import trening from '../data/data'
import styles from './training.module.scss'
import NotTraining from './Nottraining'

const Pagination = React.lazy(() => import('./Pagination'))

function Trening() {
    const { register, handleSubmit } = useForm()
    const [arrTraining, setArrTraining] = useState([])
    const [arr, setArr] = useState(arrTraining.slice(0, 18))
    const [activeId, setActiveId] = useState(1)
    const [count, setCount] = useState(1)
    const [categories, setCategories] = useState([])
    const [data, setData] = useState(['all'])
    const [isChecked, setIsChecked] = useState({
        all: true,
        legs: false,
        cardio: false,
        functional: false,
        press: false,
        back: false,
        biceps: false,
        pectoral: false,
        shoulders: false,
        triceps: false,
    })

    useEffect(() => {
        if (data.includes()) {
            console.log(data.includes())
        }
    }, [isChecked])

    useEffect(() => {
        if (data.includes('all')) {
            setArrTraining(trening)
        } else {
            const filteredTraining = trening.filter((item) =>
                data.includes(item.category)
            )
            setArrTraining(filteredTraining)
        }
    }, [data, trening])
    const onSubmit = (data) => {
        setData(Object.values(data))
        setIsChecked(data)
    }

    useEffect(() => {
        let set = new Set()
        for (let el of trening) {
            set.add(el.category)
        }
        setCategories(Array.from(set))
    }, [])

    const paginationList = (e, countItems) => {
        if (e.currentTarget.name === 'left') {
            if (count === 1) {
                setCount(1)
                setActiveId(count)
            } else {
                setCount((prev) => prev - 1)
                setActiveId(count - 1)
            }
        }
        if (e.currentTarget.name === 'right') {
            if (count === countItems) {
                setCount(countItems)
                setActiveId(count)
            } else {
                setCount((prev) => prev + 1)
                setActiveId(count + 1)
            }
        }
        if (e.currentTarget.value) {
            setCount(Number(e.currentTarget.id))
            if (e.currentTarget.id) {
                setActiveId(Number(e.currentTarget.id))
            }
        }
    }
    useEffect(() => {
        let notePage = 18
        let start = (count - 1) * notePage
        let end = start + notePage
        setArr(arrTraining.slice(start, end))
    }, [count, arrTraining])

    return (
        <section className={styles.section}>
            <article className={styles.article}>
                <FormTraining
                    handleSubmit={handleSubmit}
                    onSubmit={onSubmit}
                    register={register}
                    categories={categories}
                    isChecked={isChecked}
                />
                <div className={styles.blockTrening}>
                    {arr.length ? (
                        arr.map((tr) => {
                            const { id, img, title } = tr
                            return (
                                <div key={id} className={styles.trainingItem}>
                                    <img src={img} alt="img" />
                                    <p>{title}</p>
                                </div>
                            )
                        })
                    ) : (
                        <NotTraining />
                    )}
                </div>
            </article>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Pagination
                    trening={trening}
                    paginationList={paginationList}
                    activeId={activeId}
                    arrTraining={arrTraining}
                />
            </Suspense>
        </section>
    )
}
export default Trening
