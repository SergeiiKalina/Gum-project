import { useState } from 'react'
import style from './formgeneratortraining.module.scss'
import trening from '../data/data'
import { useForm } from 'react-hook-form'

function FormGeneratorTraining({ onDataChange, onBulChange, handelDataForm }) {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})

    const onSubmit = (data) => {
        setData(data)
        handelDataForm(data)
    }
    for (let a of trening.filter((el) => el.category === 'shoulders')) {
        console.log(a.title)
    }
    const clear = (e) => {
        e.preventDefault()
        onBulChange(false)
    }

    function filterExLegg() {
        let arr = []
        let generalArr = []
        let arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = arr1.filter((el) => el.category === 'legg')

        let arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)

        arr = arr.concat(arr2)
        generalArr = arr.slice(0, 2)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)

        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = trening.filter((el) => el.category === 'shoulders')
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)
        arr = arr.concat(arr2)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        return generalArr
    }
    function filterExBack() {
        let arr = []
        let generalArr = []
        let arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = trening.filter((el) => el.category === 'back')
        let arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)
        arr = arr.concat(arr2)
        generalArr = arr.slice(0, 2)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = trening.filter((el) => el.category === 'pectoral muscles')
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)
        arr = arr.concat(arr2)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        return generalArr
    }

    function filterExHand() {
        let arr = []
        let generalArr = []
        let arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = trening.filter((el) => el.category === 'biceps')

        let arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)
        arr = arr.concat(arr2)
        generalArr = arr.slice(0, 2)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr1 = trening.filter((el) => el.sex === data.sex)
        arr1 = arr1.concat(trening.filter((el) => el.sex === 'unsex'))
        arr1 = trening.filter((el) => el.category === 'triceps')
        console.log(arr1)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => el.basicExercise)
        arr = arr.concat(arr2)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        arr2 = arr1.filter((el) => el.fitnessLevel === data.fitnessLevel)
        arr2 = arr2.filter((el) => !el.basicExercise)
        generalArr = generalArr.concat(arr2.slice(0, 2))
        return generalArr
    }

    const generateTraining = (e, obj) => {
        let allEx = []

        e.preventDefault()
        if (data.split === 'Leggs + Shoulders') {
            allEx = filterExLegg()
        }
        if (data.split === 'Сhest + Back') {
            allEx = filterExBack()
        }
        if (data.split === 'Biceps + Triceps') {
            allEx = filterExHand()
        }

        onDataChange(allEx)
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
                <div className={style.section}>
                    <p>Sex:</p>
                    <article className={style.article}>
                        <label>
                            Male
                            <input
                                type="radio"
                                name="sex"
                                value="male"
                                {...register('sex')}
                            />
                        </label>
                        <label>
                            Female
                            <input
                                type="radio"
                                name="sex"
                                value="female"
                                {...register('sex')}
                            />
                        </label>
                    </article>
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
                <section className={`${style.section} ${style.split}`}>
                    <p>Muscle split:</p>
                    <article className={style.article}>
                        <label>
                            Leggs + Shoulders
                            <input
                                type="radio"
                                name="split"
                                value="Leggs + Shoulders"
                                {...register('split')}
                            />
                        </label>
                        <label>
                            Сhest + Back
                            <input
                                type="radio"
                                name="split"
                                value="Сhest + Back"
                                {...register('split')}
                            />
                        </label>
                        <label>
                            Biceps + Triceps
                            <input
                                type="radio"
                                name="split"
                                value="Biceps + Triceps"
                                {...register('split')}
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
                </div>
            </form>
        </div>
    )
}

export default FormGeneratorTraining
