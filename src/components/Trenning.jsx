import { useEffect, useState } from 'react'
import trening from '../data/data'
import Pagination from './Pagination'
import styles from './training.module.css'

function Trening() {
    const [arr, setArr] = useState(trening.slice(0, 18))
    const [activeId, setActiveId] = useState(1)
    const [count, setCount] = useState(1)

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
        setArr(trening.slice(start, end))
    }, [count])

    return (
        <section>
            <div className={styles.blockTrening}>
                {arr.map((tr) => {
                    const { id, img, title } = tr
                    return (
                        <div key={id} className={styles.trainingItem}>
                            <img src={img} alt="img" />
                            <p>{title}</p>
                        </div>
                    )
                })}
            </div>
            <Pagination
                trening={trening}
                paginationList={paginationList}
                activeId={activeId}
            />
        </section>
    )
}
export default Trening
