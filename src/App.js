import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Mylayouts from "./components/layouts/Mylayouts"
import Training from "./components/Training"
import RegistrationForTraining from "./components/RegistrationForTraining"
import AboutMe from "./components/AboutMe.tsx"
import Contacts from "./components/Contacts"
import GeneratorTraining from "./components/GeneratorTraining"
import Login from "./components/header/Login"
import Logout from "./components/header/Logout"
import AdminForm from "./components/AdminForm"
import "./App.scss"
import StartTraining from "./components/StartTraining"
import HomeTestForm from "./components/HomeTestForm"
import AvailabilityOfInventory from "./components/AvailabilityOfInventory"
import FormGenTrainStepThird from "./components/FormGenTrainStepThird"
import FinishedTraining from "./components/FinishedTraining"
import FormGenTrainStepTwo from "./components/FormGenTrainStepTwo"
import GymTestForm from "./components/GymTestForm"

function App() {
    const [user, setUser] = useState(true)

    const funkUser = (user) => {
        setUser(user)
    }

    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Mylayouts value={user} />}>
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
                                user ? <Login onClick={funkUser} /> : <Logout />
                            }
                        />
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App
