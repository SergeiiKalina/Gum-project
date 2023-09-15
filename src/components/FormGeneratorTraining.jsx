import { useDispatch, useSelector } from "react-redux"
import { useForm, Controller } from "react-hook-form"
import FormGenTrainStepOne from "./FormGenTrainStepOne"
import FormGenTrainStepThird from "./FormGenTrainStepThird"
import FormGenTrainStepFourth from "./FormGenTrainStepFourth"
import {
    changeStepForm,
    changeBul,
    writeFormData,
} from "../store/generatorTrainingReduser"
import training from "../data/data"
import style from "./formGeneratorTraining.module.scss"
import HomeTestForm from "./HomeTestForm"
import AvailabilityOfInventory from "./AvailabilityOfInventory"
import GymTestForm from "./GymTestForm"

function FormGeneratorTraining({ onDataChange }) {
    const { register, handleSubmit, control } = useForm()
    const data = useSelector((state) => state.training.formData)

    const step = useSelector((state) => state.training.step)
    const placeTraining = useSelector((state) => state.training.placeTraining)
    const dispatch = useDispatch()
    const nextStep = (e) => {
        e.preventDefault()
        dispatch(changeStepForm(step + 1))
    }

    const onSubmit = (data) => {
        dispatch(writeFormData(data))
        generateTraining(data)
    }

    function generateRandomExerciseWorkout(
        data,
        basicQuantity,
        noBasicQuantity,
        filteredBasicArr,
        filteredNoBasicArr,
        currentArr = [],
        setSubCategories = new Set()
    ) {
        console.log(filteredBasicArr)
        console.log(filteredNoBasicArr)
        if (currentArr.length === basicQuantity + noBasicQuantity) {
            return currentArr
        }

        if (filteredBasicArr.length >= basicQuantity) {
            if (currentArr.length < basicQuantity) {
                let randomIndex = Math.floor(
                    Math.random() * filteredBasicArr.length
                )
                let randomElement = filteredBasicArr[randomIndex]
                if (!setSubCategories.has(randomElement.subCatigories)) {
                    currentArr = [...currentArr, randomElement]
                    setSubCategories.add(randomElement.subCatigories)
                }
                return generateRandomExerciseWorkout(
                    data,
                    basicQuantity,
                    noBasicQuantity,
                    filteredBasicArr,
                    filteredNoBasicArr,
                    currentArr,
                    setSubCategories
                )
            }
        } else {
            return generateRandomExerciseWorkout(
                data,
                basicQuantity,
                noBasicQuantity,
                filteredBasicArr.concat(filteredNoBasicArr),
                filteredNoBasicArr,
                currentArr,
                setSubCategories
            )
        }
        if (filteredNoBasicArr.length >= noBasicQuantity) {
            if (currentArr.length < basicQuantity + noBasicQuantity) {
                let randomIndex = Math.floor(
                    Math.random() * filteredNoBasicArr.length
                )
                let randomElement = filteredNoBasicArr[randomIndex]
                if (!setSubCategories.has(randomElement.subCatigories)) {
                    currentArr = [...currentArr, randomElement]
                    setSubCategories.add(randomElement.subCatigories)
                }

                return generateRandomExerciseWorkout(
                    data,
                    basicQuantity,
                    noBasicQuantity,
                    filteredBasicArr,
                    filteredNoBasicArr,
                    currentArr,
                    setSubCategories
                )
            }
        } else {
            return generateRandomExerciseWorkout(
                data,
                basicQuantity,
                noBasicQuantity,
                filteredNoBasicArr.concat(filteredBasicArr),
                filteredBasicArr,
                currentArr,
                setSubCategories
            )
        }
    }

    function filterArrayByCategory(data, category, basic) {
        const { fitnessLevel, placeOfTraining, problems, sex } = data
        console.log(fitnessLevel)
        return training
            .filter((el) => !el.LFC.some((item) => problems.includes(item)))
            .filter((item) =>
                item.workingOut.some((el) => el === placeOfTraining)
            )
            .filter((el) => el.sex === sex || el.sex === "unsex")
            .filter((el) => {
                let filteringPattern =
                    el.fitnessLevel === Number(fitnessLevel) ||
                    el.fitnessLevel === Number(fitnessLevel) - 1

                if (
                    (category === "back" && fitnessLevel === 2) ||
                    (category === "pectoral" && fitnessLevel === 2) ||
                    (category === "legs" && fitnessLevel === 2) ||
                    (category === "back" && fitnessLevel === 1) ||
                    (category === "pectoral" && fitnessLevel === 1)
                ) {
                    if (
                        (category === "back" || category === "pectoral") &&
                        fitnessLevel === 2 &&
                        placeOfTraining === "home" &&
                        basic === false
                    ) {
                        filteringPattern = filteringPattern =
                            el.fitnessLevel === Number(fitnessLevel) ||
                            el.fitnessLevel === Number(fitnessLevel) - 1
                    } else {
                        filteringPattern = filteringPattern =
                            el.fitnessLevel === Number(fitnessLevel) ||
                            el.fitnessLevel === Number(fitnessLevel) + 1
                    }
                }
                if (
                    (category === "shoulders" && fitnessLevel === 2) ||
                    (category === "biceps" && fitnessLevel === 2) ||
                    (category === "triceps" && fitnessLevel === 2) ||
                    (category === "legs" && fitnessLevel === 1)
                ) {
                    filteringPattern = el.fitnessLevel === Number(fitnessLevel)
                }
                if (
                    (category === "shoulders" && fitnessLevel === 1) ||
                    (category === "triceps" && fitnessLevel === 1)
                ) {
                    filteringPattern = filteringPattern =
                        el.fitnessLevel === Number(fitnessLevel) ||
                        el.fitnessLevel === Number(fitnessLevel) + 1
                }

                return (
                    el.category === category &&
                    filteringPattern &&
                    el.basicExercise === basic
                )
            })
    }

    const generateTraining = (data) => {
        if (data.placeOfTraining === "home") {
            const {
                pushUpQuantity,
                sitUp,
                squatQuantity,
                age,
                weight,
                ...rest
            } = data
            const fitnessLevel = Math.round(
                (Number(pushUpQuantity) +
                    Number(sitUp) +
                    Number(squatQuantity)) /
                    3
            )

            const bodyMassIndex = Math.round(
                (Number(weight) / (1.75 * 1.75)) * Number(age)
            )

            data = { ...rest, fitnessLevel, bodyMassIndex }
        }
        if (data.placeOfTraining === "gym") {
            const {
                pushUpQuantity,
                benchPressWeight,
                deadLiftWeight,
                pullUp,
                squatWeight,
                sitUp,
                age,
                weight,
                ...rest
            } = data
            let cofBenchPress = Number(benchPressWeight) / Number(weight)
            let cofSquat = Number(squatWeight) / Number(weight)
            let cofDeadLift = Number(deadLiftWeight) / Number(weight)
            let cofPushUp = 0
            let cofSitUp = 0
            let cofPullUp = 0
            if (pushUpQuantity > Number(15)) {
                pushUpQuantity > Number(40) ? (cofPushUp = 3) : (cofPushUp = 2)
            } else {
                cofPushUp = 1
            }
            if (sitUp < Number(20)) {
                sitUp > Number(40) ? (cofSitUp = 3) : (cofSitUp = 2)
            } else {
                cofSitUp = 1
            }
            if (pushUpQuantity > Number(3)) {
                pushUpQuantity > Number(10) ? (cofPullUp = 3) : (cofPullUp = 2)
            } else {
                cofPullUp = 1
            }
            if (cofBenchPress > 0.8) {
                cofBenchPress > 1.2 ? (cofBenchPress = 3) : (cofBenchPress = 2)
            } else {
                cofBenchPress = 1
            }
            if (cofSquat > 1) {
                cofSquat > 1.5 ? (cofSquat = 3) : (cofSquat = 2)
            } else {
                cofSquat = 1
            }
            if (cofDeadLift > 1.1) {
                cofDeadLift > 1.6 ? (cofDeadLift = 3) : (cofDeadLift = 2)
            } else {
                cofDeadLift = 1
            }

            const fitnessLevel = Math.round(
                (Number(cofBenchPress) +
                    Number(cofSquat) +
                    Number(cofDeadLift) +
                    Number(cofPushUp) +
                    Number(cofSitUp) +
                    Number(cofPullUp)) /
                    6
            )

            const bodyMassIndex = Math.round(
                (Number(weight) / (1.75 * 1.75)) * Number(age)
            )

            data = { ...rest, fitnessLevel, bodyMassIndex }
        }
        let allEx = []
        if (data.sex === "male" && data.placeOfTraining === "home") {
            if (data.focus === "fullBody") {
                console.log("fullbody")
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    2,
                    0,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )

                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", true)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        0,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "fullBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "upperBody") {
                let training = []

                training = generateRandomExerciseWorkout(
                    data,
                    2,
                    1,
                    filterArrayByCategory(data, "back", true),
                    filterArrayByCategory(data, "back", false)
                )

                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        1,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        1,
                        filterArrayByCategory(data, "triceps", true),
                        filterArrayByCategory(data, "triceps", true)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "upperBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "lowerBody") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    1,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "lowerBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "back") {
                let training = []

                training = generateRandomExerciseWorkout(
                    data,
                    2,
                    3,
                    filterArrayByCategory(data, "back", true),
                    filterArrayByCategory(data, "back", false)
                )
                training.unshift({
                    id: 0,
                    category: "back",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "legs") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    4,
                    2,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )
                training.unshift({
                    id: 0,
                    category: "legs",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "chest") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    2,
                    filterArrayByCategory(data, "pectoral", true),
                    filterArrayByCategory(data, "pectoral", false)
                )
                training.unshift({
                    id: 0,
                    category: "pectoral",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "shoulders") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    3,
                    filterArrayByCategory(data, "shoulders", true),
                    filterArrayByCategory(data, "shoulders", false)
                )
                training.unshift({
                    id: 0,
                    category: "shoulders",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "hand") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    1,
                    3,
                    filterArrayByCategory(data, "biceps", true),
                    filterArrayByCategory(data, "biceps", false)
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "triceps", true),
                        filterArrayByCategory(data, "triceps", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "hand",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "press") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    2,
                    filterArrayByCategory(data, "pres", false),
                    filterArrayByCategory(data, "pres", false)
                )
                training.unshift({
                    id: 0,
                    category: "pres",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
        }

        if (data.sex === "male" && data.placeOfTraining === "gym") {
            if (data.focus === "fullBody") {
                console.log("fullbody")
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    2,
                    0,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )

                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", true)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        0,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "fullBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "upperBody") {
                let training = []

                training = generateRandomExerciseWorkout(
                    data,
                    2,
                    1,
                    filterArrayByCategory(data, "back", true),
                    filterArrayByCategory(data, "back", false)
                )

                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        1,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        1,
                        1,
                        filterArrayByCategory(data, "triceps", true),
                        filterArrayByCategory(data, "triceps", true)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "upperBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "lowerBody") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    1,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "lowerBody",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "back") {
                let training = []

                training = generateRandomExerciseWorkout(
                    data,
                    4,
                    2,
                    filterArrayByCategory(data, "back", true),
                    filterArrayByCategory(data, "back", false)
                )
                training.unshift({
                    id: 0,
                    category: "back",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "legs") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    4,
                    2,
                    filterArrayByCategory(data, "legs", true),
                    filterArrayByCategory(data, "legs", false)
                )
                training.unshift({
                    id: 0,
                    category: "legs",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "chest") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    4,
                    2,
                    filterArrayByCategory(data, "pectoral", true),
                    filterArrayByCategory(data, "pectoral", true)
                )
                training.unshift({
                    id: 0,
                    category: "pectoral",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "shoulders") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    3,
                    filterArrayByCategory(data, "shoulders", true),
                    filterArrayByCategory(data, "shoulders", false)
                )
                training.unshift({
                    id: 0,
                    category: "shoulders",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "hand") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    1,
                    3,
                    filterArrayByCategory(data, "biceps", true),
                    filterArrayByCategory(data, "biceps", false)
                )
                training = training.concat(
                    generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "triceps", true),
                        filterArrayByCategory(data, "triceps", false)
                    )
                )
                training.unshift({
                    id: 0,
                    category: "hand",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
            if (data.focus === "press") {
                let training = []
                training = generateRandomExerciseWorkout(
                    data,
                    3,
                    3,
                    filterArrayByCategory(data, "pres", false),
                    filterArrayByCategory(data, "pres", false)
                )
                training.unshift({
                    id: 0,
                    category: "pres",
                    title: "First training day",
                    style: true,
                })
                console.log(training)
                allEx.push(training)
            }
        } else {
            if (data.sex === "female" && data.placeOfTraining === "home") {
                if (data.focus === "fullBody") {
                    console.log("fullbody")
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", true)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            0,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "fullBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "upperBody") {
                    let training = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", true)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "upperBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "lowerBody") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "lowerBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "back") {
                    let training = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        3,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "back",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "legs") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "chest") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        2,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "pectoral",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "shoulders") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "shoulders",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "hand") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        1,
                        3,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "hand",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "press") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        2,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "pres",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
            }
            if (data.sex === "female" && data.placeOfTraining === "gym") {
                if (data.focus === "fullBody") {
                    console.log("fullbody")
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", true)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            0,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "fullBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "upperBody") {
                    let training = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", true)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "upperBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "lowerBody") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "lowerBody",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "back") {
                    let training = []

                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "back",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "legs") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "chest") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", true)
                    )
                    training.unshift({
                        id: 0,
                        category: "pectoral",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "shoulders") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "shoulders",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "hand") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        1,
                        3,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", false)
                        )
                    )
                    training.unshift({
                        id: 0,
                        category: "hand",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
                if (data.focus === "press") {
                    let training = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )
                    training.unshift({
                        id: 0,
                        category: "pres",
                        title: "First training day",
                        style: true,
                    })
                    console.log(training)
                    allEx.push(training)
                }
            }
        }

        // let allEx = []
        // let firstDay = []
        // let secondDay = []
        // let thirdDay = []
        // firstDay = filterExLeg(data)
        // firstDay = firstDay.concat(filterExShoulders(data))
        // firstDay = firstDay.concat(filterExPres(data, 1))
        // firstDay.unshift({
        //     id: 0,
        //     category: 'legs',
        //     title: 'First training day',
        //     style: true,
        // })

        // secondDay.push({
        //     id: 10,
        //     category: 'back',
        //     title: 'Second Day Two',
        //     style: true,
        // })

        // secondDay = secondDay.concat(filterExBack(data))
        // secondDay = secondDay.concat(filterExPectoral(data))
        // secondDay = secondDay.concat(filterExPres(data, 1))

        // thirdDay.push({
        //     id: 20,
        //     category: 'biceps',
        //     title: 'Third training day',
        //     style: true,
        // })
        // thirdDay = thirdDay.concat(filterExBiceps(data))
        // thirdDay = thirdDay.concat(filterExTriceps(data))
        // thirdDay = thirdDay.concat(filterExPres(data, 1))
        // allEx.push(firstDay, secondDay, thirdDay)
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
                    <FormGenTrainStepFourth
                        register={register}
                        nextStep={nextStep}
                        data={data}
                    />
                )}
                {step === 3 && placeTraining === "gym" ? (
                    <GymTestForm register={register} nextStep={nextStep} />
                ) : (
                    step === 3 && (
                        <HomeTestForm register={register} nextStep={nextStep} />
                    )
                )}
                {step === 4 && placeTraining === "gym" ? (
                    <FormGenTrainStepThird
                        register={register}
                        nextStep={nextStep}
                        data={data}
                        generateTraining={generateTraining}
                    />
                ) : (
                    step === 4 && (
                        <AvailabilityOfInventory
                            register={register}
                            nextStep={nextStep}
                            Controller={Controller}
                            control={control}
                        />
                    )
                )}
                {step === 5 && (
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
