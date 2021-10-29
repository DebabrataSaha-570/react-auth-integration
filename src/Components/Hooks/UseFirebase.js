import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import initializeAuthenticaton from "../../Firebase/firebase.init"

initializeAuthenticaton();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user)
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle
    }
}
export default useFirebase;