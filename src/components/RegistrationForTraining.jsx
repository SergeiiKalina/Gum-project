import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import style from './registrationForTraining.module.scss'
import axios from 'axios'

function RegistrationForTraining() {
    const { register, handleSubmit } = useForm()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSub = async (data) => {
        try {
            // Отправка POST-запроса на сервер
            await axios.post('http://localhost:5000/send-email', {
                name: data.firstName,
                email: data.emailAddress,
                message: data.aboutself,
            })

            // Очистка полей формы после успешной отправки
            setName('')
            setEmail('')
            setMessage('')

            alert('Email sent successfully!')
        } catch (error) {
            console.log('Error sending email:', error)
            alert('Error sending email. Please try again.')
        }
    }

    return (
        <div className={style.wrapper}>
            <form onSubmit={handleSubmit(handleSub)}>
                <h2>Registration Form</h2>
                <input
                    type="text"
                    placeholder="First Name"
                    {...register('firstName')}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Last Name"
                    {...register('lastName')}
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    {...register('emailAddress')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input
                    type="tel"
                    placeholder="Number Phone"
                    {...register('numberPhone')}
                />

                <textarea
                    className={style.textarea}
                    placeholder="About Self"
                    {...register('aboutself')}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>

                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default RegistrationForTraining
