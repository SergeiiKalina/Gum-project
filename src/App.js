import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mylayouts from './components/layouts/Mylayouts'
import Trening from './components/Trenning'
import RegistrationForTraining from './components/RegistrationForTraining'
import AboutMe from './components/AboutMe'
import Contacts from './components/Contacts'
import GeneratorTraining from './components/GeneratorTraining'
import './App.scss'
import React, { useState } from 'react'
import Login from './components/header/Login'
import Logout from './components/header/Logout'

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
                        <Route index element={<AboutMe />} />
                        <Route path="workout" element={<Trening />} />
                        <Route
                            path="gentraining"
                            element={<GeneratorTraining />}
                        />
                        <Route
                            path="registrationfortraining"
                            element={<RegistrationForTraining />}
                        />
                        <Route path="contacts" element={<Contacts />} />
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
