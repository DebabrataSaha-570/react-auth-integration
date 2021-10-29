import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import useFirebase from '../Hooks/UseFirebase'
const Header = () => {
    const { user } = useFirebase()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogIn</Link>
            {user.email && <button>Log out</button>}
        </div>
    );
};

export default Header;