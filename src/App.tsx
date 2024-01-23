import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyLayouts from "./components/layouts/MyLayouts"
import Training from "./components/Main/Training/Training"
import RegistrationForTraining from "./components/Main/RegistrationForTraining/RegistrationForTraining"
import Contacts from "./components/header/Contacts/Contacts"
import AdminForm from "./components/Other/AdminForm/AdminForm"
import StartTraining from "./components/Main/StartTraining/StartTraining"
import HomeTestForm from "./components/Main/FormGenerationTraining/HomeTestForm"
import AvailabilityOfInventory from "./components/Main/FormGenerationTraining/AvailabilityOfInventory"
import FormGenTrainStepThird from "./components/Main/FormGenerationTraining/FormGenTrainStepThird"
import FinishedTraining from "./components/Main/FinishedTraining/FinishedTraining"
import FormGenTrainStepTwo from "./components/Main/FormGenerationTraining/FormGenTrainStepTwo"
import GymTestForm from "./components/Main/FormGenerationTraining/GymTestForm"
import Login from "./components/header/Login/Login"
import Registration from "./components/header/Registration/Registration"
import FormGenTrainStepOne from "./components/Main/FormGenerationTraining/FormGenTrainStepOne"
import "./App.scss"
import PersonalData from "./components/header/MenuUser/PersonalData/PersonalData"

function App(): React.JSX.Element {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MyLayouts />}>
                        <Route path="workout" element={<Training />} />
                        <Route index element={<Login />} />
                        <Route
                            path="gentraining"
                            element={<FormGenTrainStepOne />}
                        />
                        <Route
                            path="personal-data"
                            element={<PersonalData />}
                        />
                        <Route
                            path="/finished-training"
                            element={<FinishedTraining />}
                        />
                        <Route
                            path="/gentraining/step-2"
                            element={<FormGenTrainStepTwo />}
                        />
                        <Route
                            path="/gentraining/step-3/gym"
                            element={<GymTestForm />}
                        />
                        <Route
                            path="/gentraining/step-4/gym"
                            element={<FormGenTrainStepThird />}
                        />
                        <Route
                            path="/gentraining/step-3/home"
                            element={<HomeTestForm />}
                        />
                        <Route
                            path="/gentraining/step-4/home"
                            element={<AvailabilityOfInventory />}
                        />
                        <Route
                            path="/gentraining/step-5/home"
                            element={<FormGenTrainStepThird />}
                        />
                        <Route
                            path="registrationfortraining"
                            element={<RegistrationForTraining />}
                        />
                        <Route path="admin" element={<AdminForm />} />
                        <Route path="contacts" element={<Contacts />} />
                        <Route
                            path="start_training"
                            element={<StartTraining />}
                        />
                        <Route path="contact" element={<Contacts />} />
                        <Route path="registration" element={<Registration />} />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
