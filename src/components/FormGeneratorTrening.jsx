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
        let obj = new Set()

        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'legs' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )

        if (filteresBasic.length > 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
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
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    obj.add(filteresNoBasic[i].subCatigories)
                    generalArr = [...generalArr, filteresNoBasic[i]]
                }
            }
            if (generalArr.length === 3) {
                for (let i = 0; i < filteresBasic.length; i++) {
                    let randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                        obj.add(filteresBasic[randomIndex].subCatigories)
                        generalArr = [...generalArr, filteresBasic[randomIndex]]
                    }
                    if (generalArr.length === 4) {
                        break
                    }
                }
            }
            if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (obj.has(randomElement.subCatigories))
                    obj.add(randomElement.subCatigories)
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
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                el.basicExercise
        )
        let obj = new Set()

        if (filteresBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
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
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    obj.add(filteresNoBasic[i].subCatigories)
                    generalArr = [...generalArr, filteresNoBasic[i]]
                }
            }
            if (generalArr.length === 3) {
                for (let i = 0; i < filteresBasic.length; i++) {
                    let randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    if (obj.has(filteresBasic[randomIndex].subCatigories)) {
                        obj.push(filteresBasic[randomIndex].subCatigories)
                        generalArr = [...generalArr, filteresBasic[randomIndex]]
                    }
                    if (generalArr.length === 4) {
                        break
                    }
                }
            }
        }

        return generalArr
    }

    function filterExBack(data) {
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
        let obj = new Set()

        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'back' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )
        console.log(filteresBasic)
        if (filteresBasic.length > 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            generalArr = [...generalArr, filteresBasic]
        }

        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'back' &&
                el.fitnessLevel === Number(data.fitnessLevel) &&
                !el.basicExercise
        )
        console.log(filteresNoBasic)
        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    obj.add(filteresNoBasic[i].subCatigories)
                    generalArr = [...generalArr, filteresNoBasic[i]]
                }
            }
            if (generalArr.length === 3) {
                for (let i = 0; i < filteresBasic.length; i++) {
                    let randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                        obj.add(filteresBasic[randomIndex].subCatigories)
                        generalArr = [...generalArr, filteresBasic[randomIndex]]
                    }
                    if (generalArr.length === 4) {
                        break
                    }
                }
            }
            if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                    } while (obj.has(randomElement.subCatigories))
                    obj.add(randomElement.subCatigories)
                    generalArr = [...generalArr, randomElement]
                }
            }
        }

        return generalArr
    }
    function filterExPectoral(data) {
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
        let obj = new Set()

        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'pectoral' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )
        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'pectoral' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                !el.basicExercise
        )
        console.log(filteresBasic)
        console.log(filteresNoBasic)
        if (filteresBasic.length > 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement
                let count = 0
                do {
                    count++
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                    if (count === 40) {
                        break
                    }
                } while (obj.has(randomElement.subCatigories))
                if (count < 40) {
                    obj.add(randomElement.subCatigories)
                    generalArr = [...generalArr, randomElement]
                }
            }
        } else {
            for (let i of filteresBasic) {
                let randomIndex = Math.floor(
                    Math.random() * filteresBasic.length
                )
                if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                    obj.add(filteresBasic[randomIndex].subCatigories)
                    generalArr = [...generalArr, filteresBasic[randomIndex]]
                }
            }
        }

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement
                let count = 0
                do {
                    count++
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                    if (count === 20) {
                        break
                    }
                    console.log(2)
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    obj.add(filteresNoBasic[i].subCatigories)
                    generalArr = [...generalArr, filteresNoBasic[i]]
                }
            }
            if (generalArr.length === 3) {
                for (let i = 0; i < filteresBasic.length; i++) {
                    let randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                        obj.add(filteresBasic[randomIndex].subCatigories)
                        generalArr = [...generalArr, filteresBasic[randomIndex]]
                    }
                    if (generalArr.length === 4) {
                        break
                    }
                }
            }
            if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                        console.log(2)
                    } while (obj.has(randomElement.subCatigories))
                    obj.add(randomElement.subCatigories)
                    generalArr = [...generalArr, randomElement]
                }
            }
        }

        return generalArr
    }

    function filterExBiceps(data) {
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
        let obj = new Set()

        let filteresBasic = filteredSex.filter(
            (el) =>
                el.category === 'biceps' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                el.basicExercise
        )
        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'biceps' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                !el.basicExercise
        )
        console.log(filteresBasic)
        console.log(filteresNoBasic)
        if (filteresBasic.length > 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement
                let count = 0
                do {
                    count++
                    randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    randomElement = filteresBasic[randomIndex]
                    if (count === 40) {
                        break
                    }
                } while (obj.has(randomElement.subCatigories))
                if (count < 40) {
                    obj.add(randomElement.subCatigories)
                    generalArr = [...generalArr, randomElement]
                }
            }
        } else {
            for (let i of filteresBasic) {
                let randomIndex = Math.floor(
                    Math.random() * filteresBasic.length
                )
                if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                    obj.add(filteresBasic[randomIndex].subCatigories)
                    generalArr = [...generalArr, filteresBasic[randomIndex]]
                }
            }
        }

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < 2; i++) {
                let randomIndex
                let randomElement
                let count = 0
                do {
                    count++
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                    if (count === 20) {
                        break
                    }
                    console.log(2)
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        } else {
            if (filteresNoBasic.length === 1) {
                for (let i = 0; i < 1; i++) {
                    obj.add(filteresNoBasic[i].subCatigories)
                    generalArr = [...generalArr, filteresNoBasic[i]]
                }
            }
            if (generalArr.length === 3) {
                for (let i = 0; i < filteresBasic.length; i++) {
                    let randomIndex = Math.floor(
                        Math.random() * filteresBasic.length
                    )
                    if (!obj.has(filteresBasic[randomIndex].subCatigories)) {
                        obj.add(filteresBasic[randomIndex].subCatigories)
                        generalArr = [...generalArr, filteresBasic[randomIndex]]
                    }
                    if (generalArr.length === 4) {
                        break
                    }
                }
            }
            if (filteresNoBasic.length === 0) {
                for (let i = 0; i < 2; i++) {
                    let randomIndex
                    let randomElement

                    do {
                        randomIndex = Math.floor(
                            Math.random() * filteresBasic.length
                        )
                        randomElement = filteresBasic[randomIndex]
                        console.log(2)
                    } while (obj.has(randomElement.subCatigories))
                    obj.add(randomElement.subCatigories)
                    generalArr = [...generalArr, randomElement]
                }
            }
        }
        if (generalArr.length <= 3) {
            for (let i = 0; i < 2; i++) {
                if (generalArr.length === 4) {
                    break
                }
                let randomIndex
                let randomElement
                let count = 0
                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                    console.log(2)
                    count++
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        }

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
        let allEx = []
        // allEx = filterExLegg(data)
        // allEx = allEx.concat(filterExShoulders(data))
        // allEx = allEx.concat(filterExBack(data))
        // allEx = allEx.concat(filterExPectoral(data))
        allEx = allEx.concat(filterExBiceps(data))

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
