import React from 'react'
import { useState } from 'react';

const SignupForm = ({ onLogin, setShowLogin }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword ] = useState( "" );
    const [zipcode, setZipcode] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [errors, setErrors] = useState([]);
    
        function handleSubmit(e) {
          e.preventDefault();
          setErrors([]);
          fetch("/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                name,
                zipcode,
                password,
                password_confirmation: passwordConfirmation
            }),
          }).then((resp) => {
            if (resp.ok) {
              resp.json().then((user) => onLogin(user));
            } else {
              resp.json().then((err) => setErrors(err.errors))
            }
          });
        }

    return (
        <div className='signup-form-container'>
        <div>
        
          <form className='sign-up-form' onSubmit={handleSubmit}>
            
      <div>
        <input
          className="email-input"
          type="text"
          placeholder='Email'
          autoComplete="off"
          value={email}
          onChange={(e) => setEmail(e.target.value)} />
      </div>
  
      <div>
        <input
          className="input"
          type="text"
          placeholder='Name(full)'
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </div>
            
      <div>
          <input
            className="input"
            type="text"
            placeholder='Zipcode'
            autoComplete="off"
            value={zipcode}
            onChange={( e ) => setZipcode( e.target.value )} />
      </div>
  
            
      <div>
        <input
          className="input"
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </div>
            
      <div>
          <input
            className="input"
            type="password"
            placeholder='Password Confirmation'

            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)} />
      </div>
  
      <div>
        <button type="submit" className="create-account-btn">Create Account</button>
        <button className='cancel-signup-btn'onClick={() => setShowLogin(true)}>Cancel</button>
      </div>
            
      <div>
        {errors.map((errors) => (
          <div className="login-errors" key={errors}>
            {errors}
          </div>
        ))}
      </div>

    </form>
  </div>
  </div>
    )
}

export default SignupForm
