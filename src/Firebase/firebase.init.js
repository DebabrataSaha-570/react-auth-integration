import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config'

const initializeAuthenticaton = () => {
    initializeApp(firebaseConfig);
}
export default initializeAuthenticaton;