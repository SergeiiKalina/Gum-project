import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
    changeBul,
    writeArr,
    setIndexStartTraining,
    IFormData,
} from "../../../store/generatorTrainingReducer"
import AddExercise from "../AddExcercise/AddExercise"
import "./finishedTraining.scss"
import MenuExercise from "../MenuExercise/MenuExercise.tsx"
import { useNavigate } from "react-router-dom"
import training, { ITraining } from "../../../data/data"
import { Box } from "@mui/system"
import { Button, Fab } from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import PlayArrowIcon from "@mui/icons-material/PlayArrow"

export interface ITrainingReducer {
    training: {
        arr: ITraining[][]
        bul: boolean
        bulTextArea: boolean
        formData: IFormData
        step: number
        textPlan: string
        startTrainingIndex: number
        placeTraining: string
        sexTraining: string
    }
}

interface IShowDialog {
    [key: number]: boolean | number
}

function FinishedTraining() {
    const value: ITraining[][] = useSelector(
        (state: ITrainingReducer) => state.training.arr
    )
    const data = useSelector(
        (state: ITrainingReducer) => state.training.formData
    )

    const [reps, setReps] = useState<number>()

    const [showDialog, setShowDialog] = useState<IShowDialog>({
        0: false,
        10: false,
        20: false,
    })
    const [thisCategories, setThisCategories] = useState<string[]>([])

    const [thisDragElement, setThisDragElement] = useState<ITraining | null>(
        null
    )

    const [currentTarget, setCurrentTarget] = useState<HTMLDivElement | null>(
        null
    )

    const [showMenuExercise, setShowMenuExercise] = useState<number | string>(
        ""
    )

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function showStartTraining(index: number) {
        dispatch(setIndexStartTraining(index))
        navigate("/start_training")
    }

    useEffect(() => {
        if (data.bodyType === "skinny") {
            setReps(8)
        }
    }, [value, data.bodyType])

    function toggleDialog(key: number, id: number, element: ITraining[]) {
        setShowMenuExercise("")
        const newShowDialog: IShowDialog = {}
        type MySetElementType = string

        let set: Set<MySetElementType> = new Set()
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

    const dragStart = (
        e: React.DragEvent<HTMLDivElement>,
        currentElementIndex: string | number | any,
        arrayIndex: string | number | any
    ) => {
        setCurrentTarget(e.currentTarget)
        let currentValueArray: ITraining[] = value[arrayIndex]
        setThisDragElement(currentValueArray[currentElementIndex])
    }

    const drag = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget.style

        target.opacity = "1"
        target.transition = "all 1s ease"
    }

    const dragEnter = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget.style
        target.paddingTop = "0"
    }

    const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (currentTarget === e.currentTarget) {
            return
        }
        const target = e.currentTarget.style

        target.transition = "all 0.5s ease"
        target.paddingTop = "60px"
    }

    const dragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    const dragDrop = (
        e: React.DragEvent<HTMLDivElement>,
        currentElementIndex: string | number | any,
        arrayIndex: string | number | any
    ) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.paddingTop = "0"
        target.transition = "padding-top 0.3s ease, transform 0.3s ease"
        const clonedValue = structuredClone(value)

        clonedValue[arrayIndex] = clonedValue[arrayIndex].filter(
            (el) => el.id !== thisDragElement!.id
        )
        clonedValue[arrayIndex].splice(currentElementIndex, 0, thisDragElement!)
        dispatch(writeArr(clonedValue))
        let animationFrameId: number
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

    const dragEnd = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
        const target = e.currentTarget.style

        target.transform = "scale(1)"
        target.paddingTop = "0"
        target.transition = "all 1s ease"
    }

    function openInfoExercise(e: React.MouseEvent) {
        for (let key in showDialog) {
            setShowDialog((prev) => ({ ...prev, [key]: false }))
        }

        if (e.currentTarget.id === showMenuExercise) {
            setShowMenuExercise("")
        } else {
            setShowMenuExercise(e.currentTarget.id)
        }
    }

    const generateRandomExerciseWorkout = useCallback(
        (
            data: IFormData,
            basicQuantity: number,
            noBasicQuantity: number,
            filteredBasicArr: ITraining[],
            filteredNoBasicArr: ITraining[],
            currentArr: ITraining[] = [],
            setSubCategories = new Set()
        ) => {
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
        },
        []
    )

    function filterArrayByCategory(
        data: IFormData,
        category: string,
        basic: boolean
    ) {
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

    const generateTraining = useCallback(
        (data: IFormData) => {
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

                if (Number(sitUp) < 20) {
                    Number(sitUp) > 40 ? (cofSitUp = 3) : (cofSitUp = 2)
                } else {
                    cofSitUp = 1
                }
                if (Number(pullUp) > 3) {
                    Number(pullUp) > 10 ? (cofPullUp = 3) : (cofPullUp = 2)
                } else {
                    cofPullUp = 1
                }
                if (cofBenchPress > 0.8) {
                    cofBenchPress > 1.2
                        ? (cofBenchPress = 3)
                        : (cofBenchPress = 2)
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
            let allEx: ITraining[][] = []
            if (data.sex === "male" && data.placeOfTraining === "home") {
                if (data.focus === "fullBody") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", true)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            0,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "upperBody") {
                    let training: ITraining[] = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )!

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", true)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "lowerBody") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "back") {
                    let training: ITraining[] = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        3,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "legs") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "chest") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        2,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "shoulders") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "hand") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        1,
                        3,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )!
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "press") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        2,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
            }

            if (data.sex === "male" && data.placeOfTraining === "gym") {
                if (data.focus === "fullBody") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        0,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", true)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            0,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "upperBody") {
                    let training: ITraining[] = []

                    training = generateRandomExerciseWorkout(
                        data,
                        2,
                        1,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )!

                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )!
                    )
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            1,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", true)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "lowerBody") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        1,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "back") {
                    let training: ITraining[] = []

                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "back", true),
                        filterArrayByCategory(data, "back", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "legs") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "legs", true),
                        filterArrayByCategory(data, "legs", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "chest") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        4,
                        2,
                        filterArrayByCategory(data, "pectoral", true),
                        filterArrayByCategory(data, "pectoral", true)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "shoulders") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "shoulders", true),
                        filterArrayByCategory(data, "shoulders", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "hand") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        1,
                        3,
                        filterArrayByCategory(data, "biceps", true),
                        filterArrayByCategory(data, "biceps", false)
                    )!
                    training = training.concat(
                        generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "triceps", true),
                            filterArrayByCategory(data, "triceps", false)
                        )!
                    )
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
                if (data.focus === "press") {
                    let training: ITraining[] = []
                    training = generateRandomExerciseWorkout(
                        data,
                        3,
                        3,
                        filterArrayByCategory(data, "pres", false),
                        filterArrayByCategory(data, "pres", false)
                    )!
                    training.unshift({
                        id: 0,
                        category: "legs",
                        title: "First training day",
                        style: true,
                        isComplited: false,
                        img: "",
                        fitnessLevel: "",
                        sex: "",
                        basicExercise: true,
                        workingOut: [""],
                        inventory: [""],
                        LFC: [""],
                    })

                    allEx.push(training)
                }
            } else {
                if (data.sex === "female" && data.placeOfTraining === "home") {
                    if (data.focus === "fullBody") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!

                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "back", true),
                                filterArrayByCategory(data, "back", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "pectoral", true),
                                filterArrayByCategory(data, "pectoral", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "shoulders", true),
                                filterArrayByCategory(data, "shoulders", true)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                0,
                                filterArrayByCategory(data, "pres", false),
                                filterArrayByCategory(data, "pres", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "upperBody") {
                        let training: ITraining[] = []

                        training = generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!

                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                1,
                                filterArrayByCategory(data, "pectoral", true),
                                filterArrayByCategory(data, "pectoral", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                1,
                                filterArrayByCategory(data, "biceps", true),
                                filterArrayByCategory(data, "biceps", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                1,
                                filterArrayByCategory(data, "triceps", true),
                                filterArrayByCategory(data, "triceps", true)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "lowerBody") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                1,
                                filterArrayByCategory(data, "pres", false),
                                filterArrayByCategory(data, "pres", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "back") {
                        let training: ITraining[] = []

                        training = generateRandomExerciseWorkout(
                            data,
                            2,
                            3,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "legs") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            4,
                            2,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "chest") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            2,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "shoulders") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            3,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "hand") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            1,
                            3,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )!
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                3,
                                1,
                                filterArrayByCategory(data, "triceps", true),
                                filterArrayByCategory(data, "triceps", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "press") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            2,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                }
                if (data.sex === "female" && data.placeOfTraining === "gym") {
                    if (data.focus === "fullBody") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            2,
                            0,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!

                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "back", true),
                                filterArrayByCategory(data, "back", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "pectoral", true),
                                filterArrayByCategory(data, "pectoral", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                0,
                                filterArrayByCategory(data, "shoulders", true),
                                filterArrayByCategory(data, "shoulders", true)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                0,
                                filterArrayByCategory(data, "pres", false),
                                filterArrayByCategory(data, "pres", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "upperBody") {
                        let training: ITraining[] = []

                        training = generateRandomExerciseWorkout(
                            data,
                            2,
                            1,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!

                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                1,
                                filterArrayByCategory(data, "pectoral", true),
                                filterArrayByCategory(data, "pectoral", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                1,
                                filterArrayByCategory(data, "biceps", true),
                                filterArrayByCategory(data, "biceps", false)
                            )!
                        )
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                1,
                                1,
                                filterArrayByCategory(data, "triceps", true),
                                filterArrayByCategory(data, "triceps", true)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "lowerBody") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            1,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                2,
                                1,
                                filterArrayByCategory(data, "pres", false),
                                filterArrayByCategory(data, "pres", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "back") {
                        let training: ITraining[] = []

                        training = generateRandomExerciseWorkout(
                            data,
                            4,
                            2,
                            filterArrayByCategory(data, "back", true),
                            filterArrayByCategory(data, "back", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "legs") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            4,
                            2,
                            filterArrayByCategory(data, "legs", true),
                            filterArrayByCategory(data, "legs", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "chest") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            4,
                            2,
                            filterArrayByCategory(data, "pectoral", true),
                            filterArrayByCategory(data, "pectoral", true)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "shoulders") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            3,
                            filterArrayByCategory(data, "shoulders", true),
                            filterArrayByCategory(data, "shoulders", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "hand") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            1,
                            3,
                            filterArrayByCategory(data, "biceps", true),
                            filterArrayByCategory(data, "biceps", false)
                        )!
                        training = training.concat(
                            generateRandomExerciseWorkout(
                                data,
                                3,
                                1,
                                filterArrayByCategory(data, "triceps", true),
                                filterArrayByCategory(data, "triceps", false)
                            )!
                        )
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                    if (data.focus === "press") {
                        let training: ITraining[] = []
                        training = generateRandomExerciseWorkout(
                            data,
                            3,
                            3,
                            filterArrayByCategory(data, "pres", false),
                            filterArrayByCategory(data, "pres", false)
                        )!
                        training.unshift({
                            id: 0,
                            category: "legs",
                            title: "First training day",
                            style: true,
                            isComplited: false,
                            img: "",
                            fitnessLevel: "",
                            sex: "",
                            basicExercise: true,
                            workingOut: [""],
                            inventory: [""],
                            LFC: [""],
                        })

                        allEx.push(training)
                    }
                }
            }
            dispatch(writeArr(allEx))
            dispatch(changeBul(true))
        },
        [dispatch, generateRandomExerciseWorkout]
    )

    useEffect(() => {
        generateTraining(data)
    }, [data, generateTraining])

    return (
        <div className="finish_training_container">
            {value.map((el, index) => (
                <article
                    key={el[0].id}
                    className="finish_training_article finish_training_open"
                >
                    <ul className="finish_training_list">
                        {el.map((element, i) => {
                            if (
                                element.id === 0 ||
                                element.id === 10 ||
                                element.id === 20
                            ) {
                                return null
                            }

                            return (
                                <div
                                    className="finish_training_containerTodo"
                                    draggable
                                    key={element.id}
                                    id={element.id.toString()}
                                    onDragStart={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ): void => dragStart(e, i, index)}
                                    onDragEnter={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => dragEnter(e)}
                                    onDragOver={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => dragOver(e)}
                                    onDragLeave={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => dragLeave(e)}
                                    onDrop={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => dragDrop(e, i, index)}
                                    onDragEnd={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => dragEnd(e)}
                                    onDrag={(
                                        e: React.DragEvent<HTMLDivElement>
                                    ) => drag(e)}
                                >
                                    <li>
                                        <div
                                            style={{
                                                position: "relative",
                                                width: "90%",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                            id={element.id.toString()}
                                            onClick={(e) => openInfoExercise(e)}
                                            title={element.title}
                                        >
                                            {element.title}
                                            {reps ? `4 x ${reps}` : ""}
                                            <div className="finish_training_blockStartExercise">
                                                <aside className="finish_training_aside">
                                                    Start the exercise
                                                </aside>
                                                {Number(showMenuExercise) ===
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
                                    </li>
                                </div>
                            )
                        })}
                    </ul>

                    <div className="finish_training_titleButton">
                        <Box sx={{ "& > :not(style)": { m: 1 } }}>
                            <Fab size="small" color="primary" aria-label="add">
                                <AddIcon
                                    onClick={() => {
                                        toggleDialog(el[0].id, el[0].id, el)
                                    }}
                                />
                            </Fab>
                        </Box>

                        {showDialog[el[0].id] === el[0].id ? (
                            <AddExercise
                                thisCategories={thisCategories}
                                currentArrIndex={index}
                            />
                        ) : null}
                    </div>
                </article>
            ))}

            <div
                style={{
                    width: "90%",
                    display: "flex",
                    paddingTop: "20px",
                }}
            >
                <Button
                    sx={{
                        width: "90%",
                        padding: "8px 0",
                        borderRadius: "15px",

                        margin: "30px auto 0 auto",
                    }}
                    variant="outlined"
                    onClick={() => showStartTraining(0)}
                >
                    Let's Go Training
                    <PlayArrowIcon sx={{ margin: " 0 0 0 5px" }} />
                </Button>
            </div>
        </div>
    )
}

export default FinishedTraining
