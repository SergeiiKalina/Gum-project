import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyLayouts from "./components/layouts/MyLayouts.tsx"
import Training from "./components/Main/Training/Training.tsx"
import RegistrationForTraining from "./components/Main/RegistrationForTraining/RegistrationForTraining.tsx"
import Contacts from "./components/header/Contacts/Contacts.tsx"
import GeneratorTraining from "./components/Main/GeneratorTraining/GeneratorTraining.tsx"
import AdminForm from "./components/Other/AdminForm/AdminForm.tsx"
import "./App.scss"
import StartTraining from "./components/Main/StartTraining/StartTraining.tsx"
import HomeTestForm from "./components/Main/FormGenerationTraining/HomeTestForm.tsx"
import AvailabilityOfInventory from "./components/Main/FormGenerationTraining/AvailabilityOfInventory.tsx"
import FormGenTrainStepThird from "./components/Main/FormGenerationTraining/FormGenTrainStepThird.tsx"
import FinishedTraining from "./components/Main/FinishedTraining/FinishedTraining.tsx"
import FormGenTrainStepTwo from "./components/Main/FormGenerationTraining/FormGenTrainStepTwo.tsx"
import GymTestForm from "./components/Main/FormGenerationTraining/GymTestForm.tsx"
import AboutMe from "./components/header/AboutMe/AboutMe.tsx"
import Login from "./components/header/Login/Login.tsx"
import Logout from "./components/header/Logout/Logout.tsx"

function App(): React.JSX.Element {
    const [user, toggleUser] = useState<boolean>(true)

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<MyLayouts />}>
                        <Route index element={<GeneratorTraining />} />
                        <Route path="workout" element={<Training />} />

                        <Route
                            path="gentraining"
                            element={<GeneratorTraining />}
                        />
                        <Route
                            path="/finished-training"
                            element={<FinishedTraining />}
                        />
                        <Route path="/about-me" element={<AboutMe />} />
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
                        <Route
                            path="login"
                            element={
                                user ? (
                                    <Login toggleUser={toggleUser} />
                                ) : (
                                    <Logout />
                                )
                            }
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
