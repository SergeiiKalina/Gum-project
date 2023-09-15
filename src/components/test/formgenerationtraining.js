const training = require("../../data/data")

function filterExLeg(data, quantity) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let obj = new Set()

    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "legs" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
            el.basicExercise
    )

    if (quantity <= 2) {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
    } else {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
                el.category === "legs" &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < quantity; i++) {
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
    }

    return generalArr
}

function filterExShoulders(data, quantity) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "shoulders" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
            el.basicExercise
    )
    let obj = new Set()

    if (quantity <= 2) {
        if (filteresBasic.length >= 2) {
            for (let i = 0; i < quantity; i++) {
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
    } else {
        if (filteresBasic.length >= 2) {
            for (let i = 0; i < quantity; i++) {
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
                el.category === "shoulders" &&
                (el.fitnessLevel === Number(data.fitnessLevel) ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                    el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < quantity; i++) {
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
    }

    return generalArr
}

function filterExBack(data, quantity) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let obj = new Set()

    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "back" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
            el.basicExercise
    )

    if (quantity <= 2) {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
    } else {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
                el.category === "back" &&
                el.fitnessLevel === Number(data.fitnessLevel) &&
                !el.basicExercise
        )

        if (filteresNoBasic.length >= 2) {
            for (let i = 0; i < quantity; i++) {
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
    }

    return generalArr
}
function filterExPectoral(data, quantity) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let obj = new Set()

    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "pectoral" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
            el.basicExercise
    )
    let filteresNoBasic = filteredSex.filter(
        (el) =>
            el.category === "pectoral" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
            !el.basicExercise
    )

    if (quantity <= 2) {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
    } else {
        if (filteresBasic.length > 2) {
            for (let i = 0; i < quantity; i++) {
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
            for (let i = 0; i < quantity; i++) {
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
    }

    return generalArr
}

function filterExBiceps(data) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let obj = new Set()

    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "biceps" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1 ||
                el.fitnessLevel === Number(data.fitnessLevel) - 2) &&
            el.basicExercise
    )
    let filteresNoBasic = filteredSex.filter(
        (el) =>
            el.category === "biceps" &&
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
                randomIndex = Math.floor(Math.random() * filteresBasic.length)
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
            let randomIndex = Math.floor(Math.random() * filteresBasic.length)
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
                randomIndex = Math.floor(Math.random() * filteresNoBasic.length)
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
                randomIndex = Math.floor(Math.random() * filteresNoBasic.length)
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
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let obj = new Set()

    let filteresBasic = filteredSex.filter(
        (el) =>
            el.category === "triceps" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
            el.basicExercise
    )
    let filteresNoBasic = filteredSex.filter(
        (el) =>
            el.category === "triceps" &&
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
                randomIndex = Math.floor(Math.random() * filteresBasic.length)
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
            let randomIndex = Math.floor(Math.random() * filteresBasic.length)
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
                randomIndex = Math.floor(Math.random() * filteresNoBasic.length)
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
                randomIndex = Math.floor(Math.random() * filteresNoBasic.length)
                randomElement = filteresNoBasic[randomIndex]
            } while (obj.has(randomElement.subCatigories))
            obj.add(randomElement.subCatigories)
            generalArr = [...generalArr, randomElement]
        }
    }

    return generalArr
}

function filterExPres(data, quantity) {
    let generalArr = []
    let filterdProblem = training.filter(
        (el) => !el.LFC.some((item) => data.problems.includes(item))
    )
    filterdProblem = filterdProblem.filter((item) =>
        item.workingOut.some((el) => el === data.placeOfTraining)
    )
    let filteredSex = filterdProblem.filter(
        (el) => el.sex === data.sex || el.sex === "unsex"
    )
    let filteresNoBasic = filteredSex.filter(
        (el) =>
            el.category === "pres" &&
            (el.fitnessLevel === Number(data.fitnessLevel) ||
                el.fitnessLevel === Number(data.fitnessLevel) - 1) &&
            !el.basicExercise
    )

    if (filteresNoBasic.length >= 2) {
        for (let i = 0; i < quantity; i++) {
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
    if (data.sex === "male") {
        const { pushUpQuantity, sitUp, squatQuantity, age, weight, ...rest } =
            data
        const fitnessLevel = Math.round(
            (Number(pushUpQuantity) + Number(sitUp) + Number(squatQuantity)) / 3
        )

        const bodyMassIndex = Math.round(
            (Number(weight) / (1.75 * 1.75)) * Number(age)
        )

        data = { ...rest, fitnessLevel, bodyMassIndex }
        console.log(data)
        if (data.focus === "fullBody") {
            let training = []
            training = filterExLeg(data, 2)
            training = training.concat(filterExBack(data, 2))
            training = training.concat(filterExPectoral(data, 2))
            training = training.concat(filterExShoulders(data, 2))
            training = training.concat(filterExPres(data, 1))
            training.unshift({
                id: 0,
                category: "legs",
                title: "First training day",
                style: true,
            })

            allEx.push(training)
        }
    } else {
        console.log("female")
    }

    return allEx
}

module.exports = generateTraining
