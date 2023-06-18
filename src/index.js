import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i)
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i)
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i)
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobike/i)
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        )
    },
}
if (isMobile.any()) {
    document.body.classList.add('touch')
} else {
    document.body.classList.add('pc')
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
