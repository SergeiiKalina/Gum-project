const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(cors())

// Парсинг тіла запиту у форматі JSON
app.use(bodyParser.json())

// Обробка POST-запиту на ендпоінт '/send-email'
app.post('/send-email', (req, res) => {
    const { name, email, message } = req.body

    // Створення об'єкту для надсилання електронної пошти за допомогою Nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'trainingfromsergijkalyna@gmail.com',
            pass: 'fljtxvyzxdumplqz',
        },
    })

    // Налаштування параметрів листа
    const mailOptions = {
        from: 'trainingfromsergijkalyna@gmail.com',
        to: 'trainingfromsergijkalyna@gmail.com',
        subject: 'Нова форма заявки',
        text: `
      Ім'я: ${name}
      Email: ${email}
      Повідомлення: ${message}
    `,
    }
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')

    // Відправка відповіді
    res.status(200).send('Email sent')

    // Відправка листа
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Помилка при відправці листа:', error)
            res.status(500).send('Помилка при відправці листа')
        } else {
            console.log('Лист відправлено:', info.response)
            res.status(200).send('Лист відправлено')
        }
    })
})

// Запуск сервера
app.listen(port, () => {
    console.log(`Сервер працює на порті ${port}`)
})
