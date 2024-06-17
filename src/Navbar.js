import React from 'react';
import './Navbar.css';
import logo from './logo192.png';

const Navbar = () => {
    return (

        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo" width={50} height={50} />
                </a>
            </div>
            <div className="navbar-center">
                <h1 style={{textAlign: 'Left'}}>Recipe Website</h1>
            </div>
            <div className="navbar-right">
                <ul className="nav-links">
                    <li>
                        <a href="/">Add Recipe</a>
                    </li>
                    <li>
                        <a href="/display">Show Database</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;