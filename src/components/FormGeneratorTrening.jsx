import { useState } from 'react'
import style from './formgeneratortraining.module.scss'
import trening from '../data/data'
import { useForm } from 'react-hook-form'
import FormGenTrainStepOne from './FormGenTrainStepOne'
import FormGenTrainStepTwo from './FormGenTrainStepTwo'
import FormGenTrainStepThird from './FormGenTrainStepThird'
import FormGenTrainStepFourth from './FormGenTrainStepFourth'

function FormGeneratorTraining({ onDataChange, onBulChange, handelDataForm }) {
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState({})
    const [step, setStep] = useState(2)

    const nextStep = (e) => {
        e.preventDefault()
        setStep((prev) => prev + 1)
    }

    const onSubmit = (data) => {
        setData(data)
        handelDataForm(data)
        generateTraining(data)
    }

    const clear = (e) => {
        e.preventDefault()
        onBulChange(false)
    }

    function filterExLegg(data) {
        let generalArr = []
        let filterdProblem = trening.filter(
            (el) => !el.LFC.some((item) => data.problems.includes(item))
        )
        filterdProblem = filterdProblem.filter((item) =>
            item.workingOut.some((el) => el === data.placeOfTraining)
        )
        let filteredSex = filterdProblem.filter(
            (el) => el.sex === data.sex || el.sex === 'unsex'
        )
        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'legs' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )

        if (filteresBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                } while (
                    generalArr.includes(randomElement) &&
                    !generalArr.some(
                        (el) => el.subCatigories === randomElement.subCatigories
                    )
                )

                generalArr = [...generalArr, randomElement]
            }
        } else {
            generalArr = [...generalArr, filteresBasic]
        }

        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'legs' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                } while (
                    generalArr.includes(randomElement) &&
                    !generalArr.some(
                        (el) => el.subCatigories === randomElement.subCatigories
                    )
                )

                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (
                        generalArr.includes(randomElement) &&
                        !generalArr.some(
                            (el) =>
                                el.subCatigories === randomElement.subCatigories
                        )
                    )

                    generalArr = [...generalArr, randomElement]
                }
                for (let j = 0; j < filteresNoBasic.length; j++) {
                    generalArr = [...generalArr, filteresNoBasic[j]]
                }
            } else if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (
                        generalArr.includes(randomElement) &&
                        !generalArr.some(
                            (el) =>
                                el.subCatigories === randomElement.subCatigories
                        )
                    )

                    generalArr = [...generalArr, randomElement]
                }
            }
        }

        return generalArr
    }

    function filterExShoulders(data) {
        let generalArr = []
        let filterdProblem = trening.filter(
            (el) => !el.LFC.some((item) => data.problems.includes(item))
        )
        filterdProblem = filterdProblem.filter((item) =>
            item.workingOut.some((el) => el === data.placeOfTraining)
        )
        let filteredSex = filterdProblem.filter(
            (el) => el.sex === data.sex || el.sex === 'unsex'
        )
        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'shoulders' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )

        if (filteresBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                } while (
                    generalArr.includes(randomElement) &&
                    !generalArr.some(
                        (el) => el.subCatigories === randomElement.subCatigories
                    )
                )

                generalArr = [...generalArr, randomElement]
            }
        } else {
            generalArr = [...generalArr, filteresBasic]
        }

        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'shoulders' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                } while (
                    generalArr.includes(randomElement) &&
                    !generalArr.some(
                        (el) => el.subCatigories == randomElement.subCatigories
                    )
                )

                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (
                        generalArr.includes(randomElement) &&
                        !generalArr.some(
                            (el) =>
                                el.subCatigories === randomElement.subCatigories
                        )
                    )

                    generalArr = [...generalArr, randomElement]
                }
                for (let j = 0; j < filteresNoBasic.length; j++) {
                    generalArr = [...generalArr, filteresNoBasic[j]]
                }
            } else if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (
                        generalArr.includes(randomElement) &&
                        !generalArr.some(
                            (el) =>
                                el.subCatigories === randomElement.subCatigories
                        )
                    )

                    generalArr = [...generalArr, randomElement]
                }
            }
        }

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
        arr1 = trening.filter((el) => el.category === 'pectoral')
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

    const generateTraining = (data) => {
        let allEx = filterExLegg(data)
        allEx = allEx.concat(filterExShoulders(data))

        if (data.split === 'Сhest + Back') {
            allEx = filterExBack(data)
        }
        if (data.split === 'Biceps + Triceps') {
            allEx = filterExHand(data)
        }

        onDataChange(allEx)
        onBulChange(true)
    }

    return (
        <div className={style.wrapper}>
            <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
                {step === 1 && (
                    <FormGenTrainStepOne
                        register={register}
                        nextStep={nextStep}
                    />
                )}
                {step === 2 && (
                    <FormGenTrainStepTwo
                        register={register}
                        nextStep={nextStep}
                    />
                )}
                {step === 3 && (
                    <FormGenTrainStepFourth
                        register={register}
                        nextStep={nextStep}
                        data={data}
                    />
                )}
                {step === 4 && (
                    <FormGenTrainStepThird
                        register={register}
                        nextStep={nextStep}
                        data={data}
                        generateTraining={generateTraining}
                    />
                )}
            </form>
        </div>
    )
}

export default FormGeneratorTraining
