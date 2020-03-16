import React from 'react';
import logo from '../../images/users-hub-logo .png';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="d-flex justify-content-center">
                <img src={logo} alt="users-hub-logo"/>
            </div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">      
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav font-weight-bold">
                        <li className="nav-item">
                            <a href="/home" className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="/membership" className="nav-link">Membership</a>
                        </li>
                        <li className="nav-item">
                            <a href="/blog" className="nav-link">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a href="/contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
