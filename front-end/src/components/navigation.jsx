import React from 'react';
import logo from '../assets/logo.png'
import { UserContext } from '../context/userContext';

export default function NavigationBar() {
    const { token } = React.useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <a href="/" className="nav-link text-light my-1">
                <img src={logo} alt="On The Market Logo" width="150" className="mx-3"/>
            </a>
            <button className="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav me-auto align-items-center">
                    <li className="nav-item mx-2">
                        <a href="/" className="nav-link text-light">Home</a>
                    </li>
                    <li className="nav-item mx-2">
                        <a href="/search" className="nav-link text-light">Search Properties</a>
                    </li>
                </ul>
                <ul className="navbar-nav me-3 align-items-center">
                    { token ? 
                    <li className="nav-item mx-2">
                        <a href="/account" className="nav-link text-light">My Account</a>
                    </li>
                    :
                    <div className="d-flex">
                        <li className="nav-item mx-2">
                            <a href="/login" className="nav-link text-light">Login</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a href="/register" className="nav-link text-light">Register</a>
                        </li>
                    </div>
                    }
                </ul>
            </div>
        </nav>
    )
}