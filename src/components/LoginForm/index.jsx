import React from 'react'

export default function LoginForm() {
    return (
        <div>
            <h4>create a new account</h4>
            <h1>Log In</h1>
            <input placeholder="Email" type="text"></input>
            <input placeholder="Password" type="password"></input>
            <a href="#">Forgot Password?</a>
            <a href="#">Not a member yet?</a>
            <button>Sign In</button>
        </div>
    )
}
