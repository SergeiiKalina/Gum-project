import React, { useEffect, useState } from "react"
import { SlCheck, SlClose, SlPlus } from "react-icons/sl"
import { FcStart } from "react-icons/fc"
import { useDispatch, useSelector } from "react-redux"
import { LuChevronDown } from "react-icons/lu"
import {
    changeCompleted,
    changeStepForm,
    changeBul,
    changeBulTextArea,
    writeArr,
    setIndexStartTraining,
} from "../store/generatorTrainingReduser"
import DownloadButton from "./DownloadButton"
import AddExercise from "./AddExercise"
import style from "./finishedTraining.module.scss"
import MenuExercise from "./MenuExercise"
import { useNavigate } from "react-router-dom"
import training from "../data/data"

function FinishedTraining({ onDataChange, onShowTextArea }) {
    const value = useSelector((state) => state.training.arr)
    const bulTextArea = useSelector((state) => state.training.bulTextArea)
    const data = useSelector((state) => state.training.formData)
    const [reps, setReps] = useState(null)

    const [showList, setShowList] = useState({
        0: "0",
        10: "10",
        20: "20",
    })
    const [showDialog, setShowDialog] = useState({
        0: false,
        10: false,
        20: false,
    })
    const [thisCategories, setThisCategories] = useState([])
    const [thisDragElement, setThisDragElement] = useState(null)
    const [checked, setChecked] = useState(0)
    const [currentTarget, setCurrentTarget] = useState(null)
    const [showMenuExercise, setShowMenuExercise] = useState("")

    const [shortText, setShortText] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        if (window.innerWidth < 640) {
            setShortText(true)
        } else {
            setShortText(false)
        }
    }, [])
    window.addEventListener("resize", () => {
        if (window.innerWidth < 640) {
            setShortText(true)
        } else {
            setShortText(false)
        }
    })

    function showStartTraining(index) {
        dispatch(setIndexStartTraining(index))
        navigate("/start_training")
    }
    const toggleTodo = (index, id) => {
        const clonedValue = structuredClone(value)

        clonedValue[index] = clonedValue[index].map((el) =>
            el.id === id
                ? {
                      ...el,
                      isComplited: !el.isComplited,
                  }
                : el
        )
        let count = 0
        clonedValue.forEach((el) => {
            el.forEach((element) => {
                if (element.isComplited === true) {
                    count += 1
                    setChecked(count)
                }
            })
        })
        if (count === 0) {
            setChecked(0)
        }

        dispatch(writeArr(clonedValue))
    }

    useEffect(() => {
        if (data.bodyType === "skinny") {
            setReps(8)
        }
    }, [value])
    const deleteExercises = (index, id) => {
        const clonedValue = structuredClone(value)
        clonedValue[index] = clonedValue[index].filter((el) => el.id !== id)
        dispatch(changeCompleted(clonedValue))
        onDataChange(clonedValue)
    }

    function toggleList(num, id) {
        if (showList[num] === id) {
            setShowList({ ...showList, [num]: false })
        } else if (showList[num] === false) {
            setShowList({ ...showList, [num]: id })
        }
    }

    function toggleDialog(key, id, element) {
        setShowMenuExercise("")
        const newShowDialog = {}
        let set = new Set()
        for (let el of element) {
            set.add(el.category)
        }
        setThisCategories(Array.from(set))
        if (showDialog[key] === id) {
            setShowDialog({ ...showDialog, [key]: false })
        } else if (showDialog[key] === false) {
            for (let prop in showDialog) {
                newShowDialog[prop] = prop === key.toString() ? id : false
            }
            setShowDialog(newShowDialog)
        }
    }

    const dragStart = (e, currentElementIndex, arrayIndex) => {
        setCurrentTarget(e.currentTarget)
        setThisDragElement(value[arrayIndex][currentElementIndex])
    }

    const drag = (e) => {
        const target = e.currentTarget.style

        target.opacity = "1"
        target.transition = "all 1s ease"
    }

    const dragEnter = (e) => {
        const target = e.currentTarget.style
        target.paddingTop = "0"
    }

    const dragOver = (e) => {
        e.preventDefault()
        if (currentTarget === e.currentTarget) {
            return
        }
        const target = e.currentTarget.style

        target.transition = "all 0.5s ease"
        target.paddingTop = "60px"
    }

    const dragLeave = (e) => {
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    const dragDrop = (e, currentElementIndex, arrayIndex) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "padding-top 0.3s ease, transform 0.3s ease"
        const clonedValue = structuredClone(value)

        clonedValue[arrayIndex] = clonedValue[arrayIndex].filter(
            (el) => el.id !== thisDragElement.id
        )
        clonedValue[arrayIndex].splice(currentElementIndex, 0, thisDragElement)
        dispatch(writeArr(clonedValue))
        let animationFrameId
        let paddingValue = 60

        const animateDrop = () => {
            paddingValue -= 5
            if (paddingValue <= 0) {
                paddingValue = 0
                target.transition = "all 0.3s ease"
                cancelAnimationFrame(animationFrameId)
            } else {
                animationFrameId = requestAnimationFrame(animateDrop)
            }
            target.paddingTop = `${paddingValue}px`
        }

        animationFrameId = requestAnimationFrame(animateDrop)
    }

    const dragEnd = (e) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.transform = "scale(1)"
        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    function openInfoExercise(e) {
        for (let key in showDialog) {
            setShowDialog((prev) => ({ ...prev, [key]: false }))
        }
        console.log(showDialog)
        if (e.currentTarget.id === showMenuExercise) {
            setShowMenuExercise("")
        } else {
            setShowMenuExercise(e.currentTarget.id)
        }
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
        console.log(setSubCategories)
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
                    category === "back" ||
                    (category === "pectoral" &&
                        fitnessLevel === 3 &&
                        placeOfTraining === "home" &&
                        sex === "female" &&
                        basic === false)
                ) {
                    filteringPattern =
                        el.fitnessLevel === Number(fitnessLevel) ||
                        el.fitnessLevel === Number(fitnessLevel) - 1 ||
                        el.fitnessLevel === Number(fitnessLevel) - 2
                }
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
        console.log(data)
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

            let cofSitUp = 0
            let cofPullUp = 0

            if (sitUp < Number(20)) {
                sitUp > Number(40) ? (cofSitUp = 3) : (cofSitUp = 2)
            } else {
                cofSitUp = 1
            }
            if (pullUp > Number(3)) {
                pullUp > Number(10) ? (cofPullUp = 3) : (cofPullUp = 2)
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
                    category: "legs",
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
                    category: "triceps",
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
                    category: "legs",
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
                    category: "biceps",
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
                    category: "legs",
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
                    category: "biceps",
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
                    category: "legs",
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
                    category: "triceps",
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
                        category: "legs",
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
                        category: "back",
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
                        category: "legs",
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
                        category: "biceps",
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
                        category: "legs",
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
                        category: "back",
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
                        category: "legs",
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
                        category: "triceps",
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

                    allEx.push(training)
                }
            }
        }
        dispatch(writeArr(allEx))
        dispatch(changeBul(true))
    }

    useEffect(() => {
        generateTraining(data)
    }, [])

    return (
        <div className={style.container}>
            <h2 className={style.head}>
                Exercises complited:
                <span>{checked}</span>
            </h2>

            {value.map((el, index) => {
                return (
                    <article
                        key={el[0].id}
                        className={`${style.article} ${
                            showList[el[0].id] === el[0].id.toString()
                                ? style.open
                                : null
                        }`}
                    >
                        <div className={style.titleButton}>
                            <button
                                className={`${style.button} ${
                                    value[index].length === 1
                                        ? style.hiddenButton
                                        : null
                                }`}
                                id={el[0].id}
                                onClick={(e) =>
                                    toggleList(
                                        e.currentTarget.id,
                                        e.currentTarget.id
                                    )
                                }
                            >
                                {shortText ? "Training" : el[0].title}

                                <LuChevronDown
                                    className={style.buttonCheckAll}
                                />
                            </button>
                            <div className={style.addExerciseBlock}>
                                <button
                                    className={style.addExerciseButton}
                                    onClick={() => {
                                        toggleDialog(el[0].id, el[0].id, el)
                                    }}
                                >
                                    {shortText ? "Add" : "Add Exercise"}

                                    <SlPlus className={style.addExercise} />
                                </button>
                                {showDialog[el[0].id] === el[0].id ? (
                                    <AddExercise
                                        thisCategories={thisCategories}
                                        currentArrIndex={index}
                                    />
                                ) : null}
                                <button
                                    className={style.startTraining}
                                    onClick={() => showStartTraining(index)}
                                >
                                    {shortText
                                        ? "Start"
                                        : "Start this training"}
                                    <FcStart className={style.startExercise} />
                                </button>
                            </div>
                        </div>
                        <ul className={style.list}>
                            {el.map((element, i) => {
                                if (
                                    element.id === 0 ||
                                    element.id === 10 ||
                                    element.id === 20
                                ) {
                                    return
                                }
                                return (
                                    <div
                                        className={style.containerTodo}
                                        draggable={true}
                                        key={element.id}
                                        id={element.id}
                                        onDragStart={(e) =>
                                            dragStart(e, i, index)
                                        }
                                        onDragEnter={(e) => dragEnter(e)}
                                        onDragOver={(e) => dragOver(e)}
                                        onDragLeave={(e) => dragLeave(e)}
                                        onDrop={(e) => dragDrop(e, i, index)}
                                        onDragEnd={(e) => dragEnd(e)}
                                        onDrag={(e) => drag(e)}
                                    >
                                        <li>
                                            <div
                                                style={{
                                                    position: "relative",
                                                    width: "90%",
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                                id={element.id}
                                                onClick={(e) =>
                                                    openInfoExercise(e)
                                                }
                                                title={element.title}
                                            >
                                                {`${i}. ${
                                                    element.title.length > 17
                                                        ? `${element.title.slice(
                                                              0,
                                                              17
                                                          )}...`
                                                        : element.title
                                                }  ${
                                                    reps ? `4 x ${reps}` : ""
                                                }`}
                                                <div
                                                    className={
                                                        style.blockStartExercise
                                                    }
                                                >
                                                    <aside
                                                        className={style.aside}
                                                    >
                                                        Start the exercise
                                                    </aside>
                                                    {showMenuExercise ==
                                                    element.id ? (
                                                        <MenuExercise
                                                            showMenuExercise={
                                                                showMenuExercise
                                                            }
                                                            setShowMenuExercise={
                                                                setShowMenuExercise
                                                            }
                                                        />
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "nowrap",
                                                }}
                                            >
                                                <SlCheck
                                                    style={
                                                        element.isComplited
                                                            ? {
                                                                  color: "#B5B8B1",
                                                                  cursor: "pointer",
                                                              }
                                                            : {
                                                                  color: " #00ff00",
                                                                  cursor: "pointer",
                                                              }
                                                    }
                                                    className={style.buttonTodo}
                                                    onClick={() =>
                                                        toggleTodo(
                                                            index,
                                                            element.id
                                                        )
                                                    }
                                                />
                                                <SlClose
                                                    onClick={() =>
                                                        deleteExercises(
                                                            index,
                                                            element.id
                                                        )
                                                    }
                                                    style={{
                                                        color: "red",
                                                        cursor: "pointer",
                                                        padding: "0 0 0 10px",
                                                    }}
                                                    className={style.buttonTodo}
                                                />
                                            </div>
                                        </li>
                                    </div>
                                )
                            })}
                        </ul>
                    </article>
                )
            })}

            <section className={style.blockButton}>
                <div>
                    <button onClick={onShowTextArea} className={style.button}>
                        {bulTextArea ? "Hide Text" : "Show Text"}
                    </button>
                    <button
                        className={`${style.btnBackToForm} ${style.button}`}
                        onClick={() =>
                            dispatch(
                                changeBul(false),
                                dispatch(changeBulTextArea(false)),
                                dispatch(changeStepForm(1))
                            )
                        }
                    >
                        Back to form
                    </button>
                </div>
                {bulTextArea ? <DownloadButton /> : null}
            </section>
        </div>
    )
}

export default FinishedTraining
