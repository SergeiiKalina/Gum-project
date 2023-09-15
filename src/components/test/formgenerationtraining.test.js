const generateTraining = require("./formgenerationtraining")

const training = require("../../data/data")

const data = {
    age: "1.1",
    bodyType: "body type",
    bodyMassIndex: 33,
    fitnessLevel: 2,
    focus: "fullBody",
    goal: "goal",
    lifestyle: "lifestyle",
    placeOfTraining: "home",
    problems: ["back"],
    sex: "male",
}

test("generateTraining function", () => {
    expect(generateTraining(data)).toEqual(
        expect.arrayContaining([
            [
                {
                    id: 0,
                    category: "legs",
                    title: "First training day",
                    style: true,
                },
                {
                    category: "legs",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "legs",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "back",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "back",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "back",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "back",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "pectoral",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "pectoral",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "shoulders",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "shoulders",
                    fitnessLevel: 2,

                    basicExercise: true,
                },
                {
                    category: "pres",
                    fitnessLevel: 2,
                },
            ],
        ])
    )
})
