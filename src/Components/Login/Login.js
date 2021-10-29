import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <h3>Please Login</h3>
            <button>Google Login</button>
            <br />
            <Link to="/register"> New User?</Link>
        </div>
    );
};

export default Login;