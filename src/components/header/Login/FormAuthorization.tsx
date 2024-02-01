import React, { FC, Dispatch, SetStateAction, ChangeEvent } from "react"
import { StyledTextField } from "../../Styled-components/Styled"
import { Button } from "@mui/material"
import "./login.scss"
import { useNavigate } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
interface IFormAuthorizationProps {
    email: string
    password: string
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    buttonLogin: (email: string, password: string) => void
    handlerGoogleLogin: () => void
}
const FormAuthorization: FC<IFormAuthorizationProps> = ({
    email,
    password,
    setEmail,
    setPassword,
    buttonLogin,
    handlerGoogleLogin,
}) => {
    const navigate = useNavigate()
    return (
        <>
            <form>
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
                <section>
                    <article className="form_authorization_button_block">
                        <Button
                            onClick={() => buttonLogin(email, password)}
                            variant="contained"
                        >
                            Login
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate("/registration")}
                        >
                            Registration
                        </Button>
                    </article>
                </section>
            </form>
            <Button variant="outlined" onClick={handlerGoogleLogin}>
                <FcGoogle style={{ marginRight: "5px" }} /> Війти за допомогою
                Google
            </Button>
        </>
    )
}
export default FormAuthorization
