import style from './formgeneratortraining.module.scss'
import trening from '../data/data'
import { useForm } from 'react-hook-form'
import FormGenTrainStepOne from './FormGenTrainStepOne'
import FormGenTrainStepTwo from './FormGenTrainStepTwo'
import FormGenTrainStepThird from './FormGenTrainStepThird'
import FormGenTrainStepFourth from './FormGenTrainStepFourth'
import { useDispatch, useSelector } from 'react-redux'
import {
    chandeStepForm,
    changeBul,
    writeFormData,
} from '../store/generatorTreiningReduser'

function FormGeneratorTraining({ onDataChange }) {
    const { register, handleSubmit } = useForm()
    const data = useSelector((state) => state.training.formData)
    const step = useSelector((state) => state.training.step)
    const dispatch = useDispatch()
    const nextStep = (e) => {
        e.preventDefault()
        dispatch(chandeStepForm(step + 1))
    }

    const onSubmit = (data) => {
        dispatch(writeFormData(data))
        generateTraining(data)
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

                do {
                    randomIndex = Math.floor(
                        Math.random() * filteresNoBasic.length
                    )
                    randomElement = filteresNoBasic[randomIndex]
                } while (obj.has(randomElement.subCatigories))
                obj.add(randomElement.subCatigories)
                generalArr = [...generalArr, randomElement]
            }
        }

        return generalArr
    }

    function filterExTriceps(data) {
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
                el.category === 'triceps' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                el.basicExercise
        )
        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'triceps' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                !el.basicExercise
        )

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
        if (generalArr.length <= 3) {
            for (let i = 0; i < 2; i++) {
                if (generalArr.length === 4) {
                    break
                }
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
        }

        return generalArr
    }

    function filterExPres(data, num) {
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
        let filteresNoBasic = filteredSex.filter(
            (el) =>
                el.category === 'pres' &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < num; i++) {
                let randomIndex
                let randomElement
                randomIndex = Math.floor(Math.random() * filteresNoBasic.length)
                randomElement = filteresNoBasic[randomIndex]
                if (!generalArr.includes(randomElement)) {
                    generalArr = [...generalArr, randomElement]
                }
            }
        }
        return generalArr
    }

    const generateTraining = (data) => {
        let allEx = []
        let firstDay = []
        let secondDay = []
        let thirdDay = []
        firstDay = filterExLegg(data)
        firstDay = firstDay.concat(filterExShoulders(data))
        firstDay = firstDay.concat(filterExPres(data, 1))
        firstDay.unshift({
            id: 0,
            category: 'legs',
            title: 'First training day',
            style: true,
        })

        secondDay.push({
            id: 10,
            category: 'back',
            title: 'Second Day Two',
            style: true,
        })

        secondDay = secondDay.concat(filterExBack(data))
        secondDay = secondDay.concat(filterExPectoral(data))
        secondDay = secondDay.concat(filterExPres(data, 1))

        thirdDay.push({
            id: 20,
            category: 'biceps',
            title: 'Third training day',
            style: true,
        })
        thirdDay = thirdDay.concat(filterExBiceps(data))
        thirdDay = thirdDay.concat(filterExTriceps(data))
        thirdDay = thirdDay.concat(filterExPres(data, 1))
        allEx.push(firstDay, secondDay, thirdDay)
        onDataChange(allEx)
        dispatch(changeBul(true))
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
