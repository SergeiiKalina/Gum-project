import React, { useState } from "react"
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

                <button>Send</button>
            </form>
        </div>
    )
}

export default RegistrationForTraining
