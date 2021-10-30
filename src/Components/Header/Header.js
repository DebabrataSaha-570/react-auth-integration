import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import useFirebase from '../Hooks/UseFirebase'
import useAuth from '../Hooks/useAuth';
const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shipping</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogIn</Link>
            <span>{user.displayName}</span>
            {user.displayName && <button onClick={logOut}>Log out</button>}
        </div>
    );
};

export default Header;