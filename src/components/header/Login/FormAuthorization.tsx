import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react"

import { StyledTextField } from "../../Styled-components/Styled"
import { Button } from "@mui/material"
import "./login.scss"
import { NavLink } from "react-router-dom"

interface IFormAuthorizationProps {
    email: string
    password: string
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    buttonLogin: (email: string, password: string) => void
    buttonLogout: () => void

    getListUsers: () => void
    toggleInflameAuthorization: boolean
}

const FormAuthorization: FC<IFormAuthorizationProps> = ({
    email,
    password,
    setEmail,
    setPassword,
    buttonLogin,
    buttonLogout,

    toggleInflameAuthorization,
    // getListUsers,
}) => {
    return (
        <form>
            {toggleInflameAuthorization ? (
                <section className="form_authorization_input_block">
                    <StyledTextField
                        type="text"
                        label="Email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                    />
                    <StyledTextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                    />
                </section>
            ) : (
                ""
            )}
            <section>
                {toggleInflameAuthorization ? (
                    <article className="form_authorization_button_block">
                        <Button
                            onClick={() => buttonLogin(email, password)}
                            variant="contained"
                            sx={{ width: "40%", margin: "0 auto" }}
                        >
                            Login
                        </Button>
                        <NavLink to="/registration">
                            <Button variant="contained" sx={{ width: "100%" }}>
                                Registration
                            </Button>
                        </NavLink>
                    </article>
                ) : (
                    <Button
                        onClick={() => buttonLogout()}
                        variant="contained"
                        sx={{ width: "40%", margin: "0 auto" }}
                    >
                        Logout
                    </Button>
                )}

                {/* <Button
                    onClick={() => getListUsers()}
                    variant="contained"
                    sx={{ width: "40%", margin: "0 auto" }}
                >
                    Get List Users
                </Button> */}
            </section>
        </form>
    )
}

export default FormAuthorization
