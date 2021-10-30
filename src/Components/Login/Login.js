import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useFirebase from '../Hooks/UseFirebase'

const Login = () => {
    const { signInUsingGoogle, signInUsingGitHub } = useAuth()
    return (
        <div>
            <h3>Please Login</h3>
            <button onClick={signInUsingGoogle}>Google Login</button>
            <button onClick={signInUsingGitHub}>Github SignIn</button>
            <br />
            <Link to="/register"> New User?</Link>
        </div>
    );
};

export default Login;