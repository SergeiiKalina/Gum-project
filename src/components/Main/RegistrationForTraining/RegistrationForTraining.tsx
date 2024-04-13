import React from "react"
import { useForm } from "react-hook-form"
import "./registrationForTraining.scss"

interface IFormRegistration {
    firstName: string
    lastName: string
    emailAddress: string
    numberPhone: string
    aboutSelf: string
}

function RegistrationForTraining(): React.JSX.Element {
    const { register } = useForm<IFormRegistration>()

    async function addExerciseToServer() {
        const url = "http://localhost:4000/add-exercise"
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    id: 444,
                    isComplited: false,
                    img: "/images/mini/FB_IMG_1567430209194.jpg",
                    category: "shoulders",
                    fitnessLevel: 1,
                    sex: "unsex",
                    basicExercise: true,
                    title: "Дрочить от плеча",
                    workingOut: ["gym", "home"],
                    inventory: ["dumbbell"],
                    LFC: ["nothing"],
                    subCatigories: "adD",
                }),
            })

            if (!response.ok) {
                throw new Error("Ебать ти не шариш!")
            }

            const result = await response.json()
            console.log(result)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="registration_for_training_wrapper">
            <form>
                <h2>Registration Form</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    {...register("firstName")}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName")}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    {...register("emailAddress")}
                />

                <input
                    type="tel"
                    placeholder="Number Phone"
                    {...register("numberPhone")}
                />

                <textarea
                    className="registration_for_training_textarea"
                    placeholder="About Self"
                    {...register("aboutSelf")}
                ></textarea>

                <button
                    onClick={(e) => {
                        e.preventDefault()
                        addExerciseToServer()
                    }}
                >
                    Send
                </button>
            </form>
        </div>
    )
}

export default RegistrationForTraining
