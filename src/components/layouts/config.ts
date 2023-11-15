import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAFix-hxAkjDzIXEu7LDV0mJOG2Vh_Ld1o",
    authDomain: "gum-app-77e1b.firebaseapp.com",
    projectId: "gum-app-77e1b",
    storageBucket: "gum-app-77e1b.appspot.com",
    messagingSenderId: "973371654715",
    appId: "1:973371654715:web:6694dfecfd99274548521e",
    measurementId: "G-TTP38WZNQP",
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export { auth, provider }
