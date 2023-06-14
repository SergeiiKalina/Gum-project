import { useState } from 'react'
import style from './formgeneratortraining.module.css'
import trening from '../data/data'
import DownloadButton from './DownloadButton'
import { useForm } from 'react-hook-form'

function FormGeneratorTraining({ onDataChange, onBulChange, plan }) {
    const [finishedTrening, setFinishedTrening] = useState(false)
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        setData(data)
    }

    let arr = []
    const [data, setData] = useState({})

    const clear = (e) => {
        e.preventDefault()
        setFinishedTrening(false)
        onBulChange(false)
    }

    const generateTraining = (e, obj) => {
        e.preventDefault()
        console.log(data)
        arr = trening.filter((el) => el.fitnessLevel == data.fitnessLevel)
        // arr = arr.filter((el) => el.category == 'press')
        setFinishedTrening(true)
        onDataChange(arr)
        onBulChange(true)
    }

    return (
        <div className={style.wrapper}>
            <form className={style.form} onChange={handleSubmit(onSubmit)}>
                <div className={style.nameForm}>
                    <label className={style.labelNameForm}>
                        First Name
                        <input
                            type="text"
                            placeholder="Name..."
                            name="firstName"
                            {...register('firstName')}
                        />
                    </label>
                    <label className={style.labelNameForm}>
                        Last Name
                        <input
                            type="text"
                            placeholder="Last Name..."
                            name="lastName"
                            {...register('lastName')}
                        />
                    </label>
                    <label className={style.labelNameForm}>
                        Email
                        <input
                            type="text"
                            placeholder="Email..."
                            name="email"
                            {...register('email')}
                        />
                    </label>
                </div>
                <div className={style.radio}>
                    <p>Sex:</p>
                    <label className={style.labelSex}>
                        Male
                        <input
                            type="radio"
                            name="sex"
                            value="male"
                            {...register('sex')}
                        />
                    </label>
                    <label className={style.labelSex}>
                        Female
                        <input
                            type="radio"
                            name="sex"
                            value="female"
                            {...register('sex')}
                        />
                    </label>
                </div>
                {/* <section className={style.section}>
                    <p>Level Exercises:</p>
                    <article className={style.article}>
                        <label>
                            Low
                            <input
                                type="radio"
                                name="levelExercises"
                                value="lowExercises"
                                defaultChecked
                            />
                        </label>
                        <label>
                            {' '}
                            Middle
                            <input
                                type="radio"
                                name="levelExercises"
                                value="middleExercises"
                            />
                        </label>
                        <label>
                            Hight
                            <input
                                type="radio"
                                name="levelExercises"
                                value="hightExercises"
                            />
                        </label>
                    </article>
                </section> */}
                <section className={style.section}>
                    <p>Fitness level:</p>
                    <article className={style.article}>
                        <label>
                            Low
                            <input
                                type="radio"
                                name="fitnessLevel"
                                value="low"
                                {...register('fitnessLevel')}
                            />
                        </label>
                        <label>
                            {' '}
                            Middle
                            <input
                                type="radio"
                                name="fitnessLevel"
                                value="middle"
                                {...register('fitnessLevel')}
                            />
                        </label>
                        <label>
                            Hight
                            <input
                                type="radio"
                                name="fitnessLevel"
                                value="hight"
                                {...register('fitnessLevel')}
                            />
                        </label>
                    </article>
                </section>
                <section className={style.section}>
                    <p>Focus:</p>
                    <article className={style.article}>
                        <label>
                            Lower body
                            <input
                                type="radio"
                                name="focus"
                                value="lowerBody"
                                {...register('focus')}
                            />
                        </label>
                        <label>
                            Upper body
                            <input
                                type="radio"
                                name="focus"
                                value="upperBody"
                                {...register('focus')}
                            />
                        </label>
                        <label>
                            Optimal load
                            <input
                                type="radio"
                                name="focus"
                                value="optimalLoad"
                                {...register('focus')}
                            />
                        </label>
                    </article>
                </section>
                <select
                    className={style.select}
                    name="weight"
                    defaultValue={'weight'}
                    {...register('weight')}
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
                    {...register('sportGoals')}
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
                    {...register('contraindications')}
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
