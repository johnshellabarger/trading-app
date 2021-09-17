import React from 'react'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'
import './loginpage.css'
import { useState } from 'react'

const LoginPage = ({ setUser }) => {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
        <div className='header'>
        <h1 className='login-header'>Welcome, please login to access the Trading Post Marketplace</h1>
        </div>
        <img className='login-photo' src='https://lh3.googleusercontent.com/pw/AM-JKLWCkKQCbqJZdSQlT6ZmnOeDGV8_bSh7-scXFZ5Kd8dLKdNe7nmiDL6PNoaX3bAdH0eva7vZ6GnpV2nzLXHIR7dfsKxXuESH7vgjqFblAfSpU2wiZlo5mq7a6Nh6QwkJP53DQpFKnX0G9FJa2DYSfRzu=w2392-h1344-no?authuser=0' alt='background photo' />
        <div className='login-container'>
            {showLogin ? (<><LoginForm onLogin={setUser}/></>) : (<SignupForm onLogin={setUser} setShowLogin={setShowLogin}/>)}
            {showLogin ? (<span className='sign-up-container'>
            <button className='create-new-account-btn'onClick={() => setShowLogin(false)}>Create New Account</button>
            </span>) : (null)}
        </div>
        </>
    )
}

export default LoginPage
