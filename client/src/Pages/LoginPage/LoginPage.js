import React from 'react'
import LoginForm from '../../components/LoginForm'
import SignupForm from '../../components/SignupForm'
import './loginpage.css'
import { useState } from 'react'

const LoginPage = ({ setUser }) => {
    const [showLogin, setShowLogin] = useState(true)

    return (
        <>
   
        <p>Welcome, please login to access the Trading Post Marketplace</p>
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
