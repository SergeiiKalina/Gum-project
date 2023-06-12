import { useState } from 'react'
import style from './formgeneratortraining.module.css'
import trening from '../data/data'
import DownloadButton from './DownloadButton'

function FormGeneratorTraining({ onDataChange, onBulChange, plan }) {
    const [finishedTrening, setFinishedTrening] = useState(false)

    let arr = []
    const [data, setData] = useState({})

    function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const values = Object.fromEntries(formData)
        setData(values)
    }

    const clear = (e) => {
        e.preventDefault()
        setFinishedTrening(false)
        onBulChange(false)
    }

    const generateTraining = (e, obj) => {
        e.preventDefault()
        arr = trening.filter((el) => el.folding == 'middle')
        setFinishedTrening(true)
        onDataChange(arr)
        onBulChange(true)
    }

    return (
        <div className={style.wrapper}>
            <form className={style.form} onChange={(e) => onSubmit(e)}>
                <div className={style.nameForm}>
                    <label className={style.labelNameForm}>
                        First Name
                        <input
                            type="text"
                            placeholder="Name..."
                            name="firstName"
                        />
                    </label>
                    <label className={style.labelNameForm}>
                        Last Name
                        <input
                            type="text"
                            placeholder="Last Name..."
                            name="lastName"
                        />
                    </label>
                    <label className={style.labelNameForm}>
                        Email
                        <input
                            type="text"
                            placeholder="Email..."
                            name="email"
                        />
                    </label>
                </div>
                <div className={style.radio}>
                    <p>Sex:</p>
                    <label className={style.labelSex}>
                        Male
                        <input
                            type="radio"
                            name="male"
                            value="male"
                            defaultChecked
                        />
                    </label>
                    <label className={style.labelSex}>
                        Female
                        <input type="radio" name="female" value="female" />
                    </label>
                </div>

                <select
                    className={style.select}
                    name="weight"
                    defaultValue={'weight'}
                >
                    <option value="weight">Weight</option>
                    <option>~50</option>
                    <option>~60</option>
                    <option>~70</option>
                    <option>~80</option>
                    <option>~90</option>
                    <option>~100</option>
                    <option>~110</option>
                    <option>~120</option>
                    <option>More 120</option>
                </select>
                <select
                    className={style.select}
                    name="target"
                    defaultValue={'Sports goals'}
                >
                    <option value="Sports goals">Sports goals</option>
                    <option>Form suport</option>
                    <option>Slow weight loss</option>
                    <option>Fast weight loss</option>
                    <option>Weight gain</option>
                </select>
                <select
                    className={style.select}
                    multiple
                    name="contraindications"
                    defaultValue={['State of the musculoskeletal system']}
                >
                    <option value="State of the musculoskeletal system">
                        State of the musculoskeletal system
                    </option>
                    <option>Neck problems</option>
                    <option>Shoulder Problems</option>
                    <option>Thoracic back problems</option>
                    <option>Lumbar back problems</option>
                    <option>Problems with the hip joints</option>
                    <option>Кnee problems</option>
                    <option>Ankle problems</option>
                    <option>Elbow problems</option>
                    <option>Problems with brushes</option>
                </select>
                <div className={style.blockButton}>
                    <button
                        className={style.buttonSend}
                        onClick={(e) => generateTraining(e, data)}
                    >
                        Send
                    </button>
                    <button className={style.buttonClear} onClick={clear}>
                        clear
                    </button>
                    {finishedTrening ? <DownloadButton plan={plan} /> : ''}
                </div>
            </form>
        </div>
    )
}

export default FormGeneratorTraining
