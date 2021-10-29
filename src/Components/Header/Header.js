import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">LogIn</Link>
        </div>
    );
};

export default Header;