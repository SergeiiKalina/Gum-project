import StepperRegistration from "./StepperRegistration"
import RegistrationStepOne, { IStateAuth } from "./RegistrationStepOne"
import RegistrationStepTwo from "./RegistrationStepTwo"
import RegistrationStepFour from "./RegistrationStepFour"
import "./registration.scss"
import { useSelector } from "react-redux"
import RegistrationStepThree from "./RegistrationStepThree"
import { RootState } from "../../../store"

export interface IRegisterForm {
    email: string
    password: string
    name: string
    mainInfo: {
        sex?: string
        weight?: number
        age?: number
        lifestyle?: string
        goal?: string
        problems?: string[]
    }
}

const Registration = () => {
    const step = useSelector(
        (state: RootState) => state.authSlice.registrationStep
    )
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
                    {step === 0 && <RegistrationStepOne />}
                    {step === 1 && <RegistrationStepTwo />}
                    {step === 2 && <RegistrationStepThree />}
                    {step === 3 && <RegistrationStepFour />}
                </>
            )}
        </>
    )
}

export default Registration
