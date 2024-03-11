import axios from "axios"
import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"

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
            window.location.href = await "http://localhost:3000/main-page"
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

export const handlerGoogleLogin = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user
            localStorage.setItem("googleToken", user.accessToken || "")
            localStorage.setItem("googleEmail", user.email || "")
            localStorage.setItem("googleUserId", user.uid || "")
            checkIfUserExists(user)

            return user
        })
        .catch((error) => {
            console.error("Error auth with Google:", error.message)
        })
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
