import React from 'react'
import { useState } from 'react'
import { useHistory } from "react-router-dom";



const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    function handleLoginResponse(user){
      onLogin(user)
      history.push("/")
    }


    function handleSubmit(e) {
        e.preventDefault();
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }).then((resp) => {
          if (resp.ok) {
            resp.json().then((user) => handleLoginResponse(user));
          } else {
            resp.json().then((err) => setErrors(err.errors));
          }
        });
      }
  

    return (
        <div className="login-form-container">
        <form onSubmit={handleSubmit}>

          <div>
            <input
              className="email-input"
              type="text"
              placeholder='Email'
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              className="password-input"
              type="password"
              placeholder='Password'
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="login-btn">
              Log In
            </button>

          </div>
          {errors ? (<div>
            {errors.map((err) => (
              <div className="login-errors" key={err}>
                {err}
              </div>
            ))}
          </div>) : (null)}

        </form>
        <h5 className='forgot-password-link'>Forgot Password?</h5>
        <div className='login-line'></div>
      </div>

    )
}

export default LoginForm
