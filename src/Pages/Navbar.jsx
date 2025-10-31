import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Theme.css';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">🌱 CO₂ Tracker</div>
            <ul className="navbar-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/DashboardMenu">Dashboard</Link></li>
                <li><Link to="/login">Inloggen</Link></li>
                <li><Link to="/login">Account</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
