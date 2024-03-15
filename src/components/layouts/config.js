import axios from "axios"
import { initializeApp } from "firebase/app"
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAFix-hxAkjDzIXEu7LDV0mJOG2Vh_Ld1o",
    authDomain: "gum-app-77e1b.firebaseapp.com",
    databaseURL:
        "https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "gum-app-77e1b",
    storageBucket: "gum-app-77e1b.appspot.com",
    messagingSenderId: "973371654715",
    appId: "1:973371654715:web:6694dfecfd99274548521e",
    measurementId: "G-TTP38WZNQP",
}

const checkIfUserExists = async (res) => {
    try {
        const response = await axios.get(
            `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${
                res.uid
            }.json?auth=${localStorage.getItem("googleToken")}`
        )

        if (!response.data) {
            await createUser(res)
        } else {
            return response.data
        }
    } catch (error) {
        console.error("Error checking user existence:", error)
        return false
    }
}

const createUser = async (res) => {
    try {
        let userObj = {
            name: res.displayName,
            email: res.email,
            photo: res.photoURL,
            id: res.uid,
        }
        const response = await axios.patch(
            `https://gum-app-77e1b-default-rtdb.europe-west1.firebasedatabase.app/users/${
                res.uid
            }.json?auth=${localStorage.getItem("googleToken")}`,
            userObj
        )

        return response.data
    } catch (error) {
        console.log(error)
    }
}

export const createUserFireBase = (email, password) => {
    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user

                return user
            })
            .then((user) => resolve(user))
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode)
                console.log(errorMessage)
            })
    })
}

export const singInUserWithFireBase = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                localStorage.setItem("googleToken", user.accessToken || "")
                localStorage.setItem("googleEmail", user.email || "")
                localStorage.setItem("googleUserId", user.uid || "")
                localStorage.setItem("googleName", user.displayName || "")
                return user
            })
            .then((user) => resolve(user))
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.error(errorCode, errorMessage)
            })
    })
}

export const handlerGoogleLogin = () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user
                localStorage.setItem("googleToken", user.accessToken || "")
                localStorage.setItem("googleEmail", user.email || "")
                localStorage.setItem("googleUserId", user.uid || "")
                localStorage.setItem("googleName", user.displayName || "")
                checkIfUserExists(user)
                    .then((userData) => {
                        resolve(userData)
                    })
                    .catch((error) => {
                        console.error("Error checking user existence:", error)
                        reject(error)
                    })
            })
            .catch((error) => {
                console.error("Error auth with Google:", error.message)
                reject(error)
            })
    })
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
