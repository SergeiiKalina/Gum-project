import styles from './formTraining.module.scss'
import { GrFormDown } from 'react-icons/gr'
import { useState } from 'react'

export default function FormTraining({
    handleSubmit,
    onSubmit,
    register,
    categories,
    isChecked,
}) {
    const [rev, setRev] = useState(false)

    const reverseArrow = () => {
        setRev((prev) => !prev)
    }
    return (
        <details className={styles.aside}>
            <summary onClick={reverseArrow}>
                Categories
                <GrFormDown
                    className={`${styles.arrow}  ${
                        rev ? `${styles.rotate}` : ''
                    }`}
                />
            </summary>
            <form className={styles.nav} onChange={handleSubmit(onSubmit)}>
                {categories.length > 0 &&
                    categories.map((el) => {
                        let str = ''
                        for (let i = 0; i < el.length; i++) {
                            if (i === 0) {
                                str += el[i].toUpperCase()
                            } else {
                                str += el[i]
                            }
                        }

                        return (
                            <label
                                key={el}
                                style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                {str}
                                <input
                                    type="checkbox"
                                    className={styles.button}
                                    value={el}
                                    checked={isChecked[el] || false}
                                    {...register(el)}
                                />
                            </label>
                        )
                    })}
            </form>
        </details>
    )
}
