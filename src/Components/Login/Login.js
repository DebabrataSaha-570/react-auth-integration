import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../Hooks/UseFirebase'

const Login = () => {
    const { signInUsingGoogle } = useFirebase()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle}>Google Login</button>
            <br />
            <Link to="/register"> New User?</Link>
        </div>
    );
};

export default Login;