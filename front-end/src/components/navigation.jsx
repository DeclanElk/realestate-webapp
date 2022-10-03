import React from 'react';
import logo from '../assets/logo.png'

export default function NavigationBar() {
    return (
        <nav class="navbar navbar-expand-sm bg-dark">
            <ul class="navbar-nav me-auto align-items-center">
                <li class="nav-item">
                    <a href="/" class="nav-link text-light">
                        <img src={logo} alt="On The Market Logo" width="150" class="mx-3"/>
                    </a>
                </li>
                <li class="nav-item mx-2">
                    <a href="/" class="nav-link text-light">Home</a>
                </li>
                <li class="nav-item mx-2">
                    <a href="/search" class="nav-link text-light">Search Properties</a>
                </li>
            </ul>
            <ul class="navbar-nav me-3">
                <li class="nav-item mx-2">
                    <a href="/" class="nav-link text-light">Login</a>
                </li>
                <li class="nav-item mx-2">
                    <a href="/" class="nav-link text-light">Register</a>
                </li>
                <li class="nav-item mx-2">
                    <a href="/" class="nav-link text-light">My Account</a>
                </li>
            </ul>
        </nav>
    )
}