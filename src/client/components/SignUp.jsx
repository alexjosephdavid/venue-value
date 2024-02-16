import { useState, useEffect } from 'react'
import styling from './SignUp.module.css'

export default function SignUp({ toggleSignUpPage }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [invalidSignUp, setInvalidSignUp] = useState(false)
  const [successfulSignUp, setSuccessfulSignUp] = useState(false)
  //make a conditional checking password and username if there is any input

  const usernameChangeHandler = (evt) => {
    evt.preventDefault()
    if (invalidSignUp) {
      setInvalidSignUp(false);
    }
    setUsername(evt.target.value)
  }
  const passwordChangeHandler = (evt) => {
    evt.preventDefault()
    if (invalidSignUp) {
      setInvalidSignUp(false);
    }
    setPassword(evt.target.value)
  }

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    console.log('SUBMIT handler hit')
    const response = await fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.valid) {
      setSuccessfulSignUp(true)
    } else {
      setInvalidSignUp(true);
    }
  }


  return <div className={styling.div}>
    <h2>Sign Up</h2>
    {invalidSignUp && <h3 style={{ color: 'red' }}>Incomplete Fields!</h3>}
    {successfulSignUp && <h3 style={{ color: 'green' }}>Successful Sign Up!</h3>}
    {successfulSignUp && <a style={{cursor: 'pointer'}} onClick={toggleSignUpPage}><strong><u>Return to Login Page</u></strong></a>}
    {!successfulSignUp && <div>
      <form className={styling.form} onSubmit={onSubmitHandler}>
        <label className={styling.label} htmlFor='username' >Username</label>
        <input
          className={styling.input}
          type='text'
          placeholder='Username'
          value={username}
          onChange={usernameChangeHandler}
          id='username'
          name='username'
        />
        <label className={styling.label} htmlFor='password' >Password</label>
        <input
          className={styling.input}
          type='password'
          placeholder='Password'
          value={password}
          onChange={passwordChangeHandler}
          id='password'
          name='password'
        />
        <button className={styling.button} type='submit'>Sign up!</button>
      </form>
    </div>}
  </div>
}