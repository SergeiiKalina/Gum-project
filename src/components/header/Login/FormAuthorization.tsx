import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react"
import { StyledTextField } from "../../Styled-components/Styled"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import "./login.scss"
interface IFormAuthorizationProps {
    email: string
    password: string
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    buttonLogin: (email: string, password: string) => void
    handlerGoogleLogin: () => void
    serverStatus: boolean
}
const FormAuthorization: FC<IFormAuthorizationProps> = ({
    email,
    password,
    setEmail,
    setPassword,
    buttonLogin,
    handlerGoogleLogin,
    serverStatus,
}) => {
    const navigate = useNavigate()

    return (
        <>
            <Button
                variant="outlined"
                onClick={handlerGoogleLogin}
                sx={{
                    color: "white",
                    textTransform: "none",
                    fontSize: "24px",
                    padding: "25px 75px",
                }}
            >
                <FcGoogle style={{ marginRight: "5px" }} />
                Google
            </Button>
            <form>
                {serverStatus && (
                    <h2>There is no connection to the server, use Google</h2>
                )}
                <section className="form_authorization_input_block">
                    <StyledTextField
                        type="text"
                        label="Email"
                        value={email}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setEmail(e.target.value)
                        }
                        disabled={serverStatus}
                    />
                    <StyledTextField
                        type="password"
                        label="Password"
                        value={password}
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setPassword(e.target.value)
                        }
                        disabled={serverStatus}
                    />
                </section>
                <section>
                    <article className="form_authorization_button_block">
                        <Button
                            onClick={() => buttonLogin(email, password)}
                            variant="contained"
                            disabled={serverStatus}
                            sx={{
                                "&.Mui-disabled": {
                                    backgroundColor: "rgba(128, 128, 128, 0.3)",
                                    color: "rgba(128, 128, 128, 0.5)",
                                },
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate("/registration")}
                            disabled={serverStatus}
                            sx={{
                                "&.Mui-disabled": {
                                    backgroundColor: "rgba(128, 128, 128, 0.3)",
                                    color: "rgba(128, 128, 128, 0.5)",
                                },
                            }}
                        >
                            Registration
                        </Button>
                    </article>
                </section>
            </form>
        </>
    )
}
export default FormAuthorization
