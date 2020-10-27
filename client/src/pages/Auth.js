import React, { Component } from 'react'
import './Auth.css'

class AuthPage extends Component {
    render() {
        return (
            <form className="auth-form">
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="emal" />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" />
                </div>
                <div className="form-actions">
                    <button type="submit">Submit</button> 
                    <button htmlFor="button">Switch to Signup</button>
                </div>
            </form>
        );
    }
}

export default AuthPage;
