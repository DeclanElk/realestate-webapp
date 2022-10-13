import React from 'react';
import logo from '../assets/logo.png'
import { UserContext } from '../context/userContext';
import { useNavigate } from 'react-router-dom';

export default function NavigationBar() {
    const navigate = useNavigate();
    const { user, token, setUser, setToken } = React.useContext(UserContext);

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
                    { token && user ? 
                    <li className="nav-item dropdown mx-4">
                        <button className='nav-link dropdown-toggle text-light btn btn-link' id='navbarDropdown' data-bs-toggle="dropdown" aria-expanded='false'>
                            {user.name}
                        </button>
                        <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='navbarDropdown'>
                            <li>
                                <a href="/account" className="dropdown-item">My Account</a>
                            </li>
                            <li>
                                <button 
                                className="dropdown-item btn-link"
                                onClick={() => {
                                    //Clear localstorage
                                    localStorage.setItem('user', null);
                                    localStorage.setItem('token', null);
                                
                                    //Clear context
                                    setUser(null);
                                    setToken(null);
                                
                                    //Send back to the home page
                                    navigate('/');
                                }}
                                >Logout</button>
                            </li>
                        </ul>
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