import { ITraining } from "../../../../data/data"
import { IFormData } from "../../../../store/generatorTrainingReducer"
import { generateTraining } from "./Function-Generate-Random-Training"

describe("check if focus Full Body", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "fullBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(9)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")

        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[6].basicExercise).toBe(true)
        expect(result[6].category).toBe("shoulders")
        expect(result[7].basicExercise).toBe(true)
        expect(result[7].category).toBe("shoulders")

        expect(result[8].basicExercise).toBe(false)
        expect(result[8].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

test("check female, 3, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "130",
        deadLift: "220",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "25",
        sex: "female",
        sitUp: "80",
        squat: "170",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 2, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "70",
        deadLift: "100",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "8",
        sex: "female",
        sitUp: "42",
        squat: "100",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 1, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "70",
        deadLift: "100",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "8",
        sex: "female",
        sitUp: "35",
        squat: "90",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 3, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "3",
        sitUp: "3",
        pushUpQuantity: "3",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 2, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "2",
        sitUp: "2",
        pushUpQuantity: "2",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 1, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "fullBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "1",
        sitUp: "1",
        pushUpQuantity: "1",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(9)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[0].category).toBe("legs")
    expect(result[1].category).toBe("legs")

    expect(result[2].category).toBe("back")
    expect(result[3].category).toBe("back")
    expect(result[2].basicExercise).toBe(true)
    expect(result[3].basicExercise).toBe(true)

    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(true)
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")

    expect(result[6].basicExercise).toBe(true)
    expect(result[6].category).toBe("shoulders")
    expect(result[7].basicExercise).toBe(true)
    expect(result[7].category).toBe("shoulders")

    expect(result[8].basicExercise).toBe(false)
    expect(result[8].category).toBe("pres")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Upper Body", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "upperBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(10)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")

        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")
        expect(result[3].basicExercise).toBe(true)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[6].category).toBe("biceps")
        expect(result[7].category).toBe("biceps")

        expect(result[8].basicExercise).toBe(true)
        expect(result[8].category).toBe("triceps")
        expect(result[9].basicExercise).toBe(false)
        expect(result[9].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

test("check female, 3, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "130",
        deadLift: "220",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "25",
        sex: "female",
        sitUp: "80",
        squat: "170",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(true)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 2, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "70",
        deadLift: "100",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "8",
        sex: "female",
        sitUp: "42",
        squat: "100",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(true)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")
    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 1, gym", () => {
    const formData: IFormData = {
        age: 1.1,
        benchPress: "70",
        deadLift: "100",
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "gym",
        problems: ["back"],
        pullUp: "8",
        sex: "female",
        sitUp: "35",
        squat: "90",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(true)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")
    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 3, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "3",
        sitUp: "3",
        pushUpQuantity: "3",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(false)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")
    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 2, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "2",
        sitUp: "2",
        pushUpQuantity: "2",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(false)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})
test("check female, 1, home", () => {
    const formData: IFormData = {
        age: 1.1,
        email: "setserg0234@gmail.com",
        firstName: "Sergeii",
        focus: "upperBody",
        goal: "weightGain",
        lastName: "Kalyna",
        lifestyle: "moderate",
        placeToWorkout: "home",
        problems: ["back"],
        sex: "female",
        squatQuantity: "1",
        sitUp: "1",
        pushUpQuantity: "1",
        weight: "92",
    }
    const result = generateTraining(formData)
    expect(Array.isArray(result)).toBe(true)
    expect(result.length).toBe(10)
    expect(result[0].basicExercise).toBe(true)
    expect(result[1].basicExercise).toBe(true)
    expect(result[2].basicExercise).toBe(false)
    expect(result[0].category).toBe("back")
    expect(result[1].category).toBe("back")
    expect(result[2].category).toBe("back")

    expect(result[3].category).toBe("pectoral")
    expect(result[4].category).toBe("pectoral")
    expect(result[5].category).toBe("pectoral")
    expect(result[3].basicExercise).toBe(true)
    expect(result[4].basicExercise).toBe(true)
    expect(result[5].basicExercise).toBe(false)

    expect(result[6].basicExercise).toBe(true)
    expect(result[7].basicExercise).toBe(false)
    expect(result[6].category).toBe("biceps")
    expect(result[7].category).toBe("biceps")

    expect(result[8].basicExercise).toBe(true)
    expect(result[8].category).toBe("triceps")
    expect(result[9].basicExercise).toBe(false)
    expect(result[9].category).toBe("triceps")

    const subCatigoriesSet = new Set<string>()
    result.forEach((exercise: ITraining) => {
        expect(exercise.basicExercise).toBeDefined()
        expect(exercise.subCatigories).toBeDefined()
        expect(typeof exercise.subCatigories).toBe("string")

        if (exercise.subCatigories !== undefined) {
            expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
            subCatigoriesSet.add(exercise.subCatigories)
        }
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Lower Body", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(typeof result[3].basicExercise).toBe("boolean")
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(typeof result[3].basicExercise).toBe("boolean")
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "female",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "lowerBody",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(7)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        expect(result[6].basicExercise).toBe(false)
        expect(result[6].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Back", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "female",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")

        expect(result[4].category).toBe("back")
        expect(result[5].category).toBe("back")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "back",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("back")
        expect(result[1].category).toBe("back")
        expect(result[2].category).toBe("back")
        expect(result[3].category).toBe("back")
        expect(result[3].category).toBe("back")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Legs", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "female",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "female",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "legs",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "female",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("legs")
        expect(result[1].category).toBe("legs")
        expect(result[2].category).toBe("legs")
        expect(result[3].category).toBe("legs")

        expect(result[4].category).toBe("legs")
        expect(result[5].category).toBe("legs")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Chest", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(4)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(true)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(4)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "chest",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pectoral")
        expect(result[1].category).toBe("pectoral")
        expect(result[2].category).toBe("pectoral")
        expect(result[3].category).toBe("pectoral")
        expect(result[4].category).toBe("pectoral")
        expect(result[5].category).toBe("pectoral")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Shoulders", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "shoulders",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(true)
        expect(result[2].basicExercise).toBe(true)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("shoulders")
        expect(result[1].category).toBe("shoulders")
        expect(result[2].category).toBe("shoulders")
        expect(result[3].category).toBe("shoulders")
        expect(result[4].category).toBe("shoulders")
        expect(result[5].category).toBe("shoulders")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Hand", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "hand",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(8)
        expect(result[0].basicExercise).toBe(true)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(true)
        expect(result[5].basicExercise).toBe(true)
        expect(result[6].basicExercise).toBe(true)
        expect(result[7].basicExercise).toBe(false)
        expect(result[0].category).toBe("biceps")
        expect(result[1].category).toBe("biceps")
        expect(result[2].category).toBe("biceps")
        expect(result[3].category).toBe("biceps")
        expect(result[4].category).toBe("triceps")
        expect(result[5].category).toBe("triceps")
        expect(result[6].category).toBe("triceps")
        expect(result[7].category).toBe("triceps")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})

/////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

describe("check if focus Press", () => {
    test("check male, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)

        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check male, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })

    test("check female, 3, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "130",
            deadLift: "220",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "25",
            sex: "male",
            sitUp: "80",
            squat: "170",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")

        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "42",
            squat: "100",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, gym", () => {
        const formData: IFormData = {
            age: 1.1,
            benchPress: "70",
            deadLift: "100",
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "gym",
            problems: ["back"],
            pullUp: "8",
            sex: "male",
            sitUp: "35",
            squat: "90",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(6)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[5].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        expect(result[5].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 3, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "3",
            sitUp: "3",
            pushUpQuantity: "3",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 2, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "2",
            sitUp: "2",
            pushUpQuantity: "2",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
    test("check female, 1, home", () => {
        const formData: IFormData = {
            age: 1.1,
            email: "setserg0234@gmail.com",
            firstName: "Sergeii",
            focus: "press",
            goal: "weightGain",
            lastName: "Kalyna",
            lifestyle: "moderate",
            placeToWorkout: "home",
            problems: ["back"],
            sex: "male",
            squatQuantity: "1",
            sitUp: "1",
            pushUpQuantity: "1",
            weight: "92",
        }
        const result = generateTraining(formData)
        expect(Array.isArray(result)).toBe(true)
        expect(result.length).toBe(5)
        expect(result[0].basicExercise).toBe(false)
        expect(result[1].basicExercise).toBe(false)
        expect(result[2].basicExercise).toBe(false)
        expect(result[3].basicExercise).toBe(false)
        expect(result[4].basicExercise).toBe(false)
        expect(result[0].category).toBe("pres")
        expect(result[1].category).toBe("pres")
        expect(result[2].category).toBe("pres")
        expect(result[3].category).toBe("pres")
        expect(result[4].category).toBe("pres")
        const subCatigoriesSet = new Set<string>()
        result.forEach((exercise: ITraining) => {
            expect(exercise.basicExercise).toBeDefined()
            expect(exercise.subCatigories).toBeDefined()
            expect(typeof exercise.subCatigories).toBe("string")

            if (exercise.subCatigories !== undefined) {
                expect(subCatigoriesSet.has(exercise.subCatigories)).toBe(false)
                subCatigoriesSet.add(exercise.subCatigories)
            }
        })
    })
})
