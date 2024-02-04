import { useState } from "react"
import StepperRegistration from "./StepperRegistration"
import RegistrationStepOne, { IStateAuth } from "./RegistrationStepOne"
import RegistrationStepTwo from "./RegistrationStepTwo"
import RegistrationStepFour from "./RegistrationStepFour"
import "./registration.scss"
import { useSelector } from "react-redux"
import RegistrationStepThree from "./RegistrationStepThree"

export interface IRegisterForm {
    email: string
    password: string
    name: string
    sex?: string
    weight?: number
    age?: number
    lifestyle?: string
    goal?: string
    problems?: string[]
}

const Registration = () => {
    const [step, setStep] = useState<number>(0)
    const isLoading = useSelector(
        (state: IStateAuth) => state.authSlice.isLoading
    )

    return (
        <>
            <StepperRegistration step={step} />
            {isLoading ? (
                <p className="registration_loader"> Loading...</p>
            ) : (
                <>
                    {step === 0 && <RegistrationStepOne setStep={setStep} />}
                    {step === 1 && <RegistrationStepTwo setStep={setStep} />}
                    {step === 2 && <RegistrationStepThree setStep={setStep} />}
                    {step === 3 && <RegistrationStepFour setStep={setStep} />}
                </>
            )}
        </>
    )
}

export default Registration
