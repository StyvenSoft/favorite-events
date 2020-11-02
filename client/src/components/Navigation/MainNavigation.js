import React from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import './MainNavigation.css'

export default function MainNavigation() {
    <AuthContext.Consumer>
        {(context) => {
            return (
                <header className="main-navigation">
                    <div className="main-navigation__logo">
                        <h1>Favorite Envents</h1>
                    </div>
                    <nav className="main-navigation__items">
                        <ul>
                            {!context.token && (
                                <li><NavLink to="/auth">Authenticate</NavLink></li> 
                            )}
                                <li><NavLink to="/events">Events</NavLink></li>
                            {context.token && (
                                <li><NavLink to="/bookings">Bookings</NavLink></li>
                            )}
                        </ul>
                    </nav>
                </header>
            )
        }}
    </AuthContext.Consumer>
}
