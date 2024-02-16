import { useState, useEffect } from 'react'
import styling from './Login.module.css'
export default function Login({ toggleLoginState, toggleSignUpPage }) {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [invalidLogin, setInvalidLogin] = useState(false)

  const usernameChangeHandler = (evt) => {
    evt.preventDefault()
    setUsername(evt.target.value)
  }
  const passwordChangeHandler = (evt) => {
    evt.preventDefault()
    setPassword(evt.target.value)
  }

  const onSubmitHandler = async (evt) => {
    evt.preventDefault();
    console.log('SUBMIT handler hit')
    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: username, password: password }),
    })
    const responseJson = await response.json();
    console.log(responseJson);
    if (responseJson.valid) {
      toggleLoginState(true);
    } else {
      setInvalidLogin(true);
    }
  }


  return <div className={styling.div}>
    <h2>Login</h2>
    {invalidLogin && <h3 style={{ color: 'red' }}>Invalid Login!</h3>}
    <div>
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
        <button className={styling.button} type='submit'>Login</button>
        <button className={`${styling.button} ${styling.signup}`} type='button' onClick={toggleSignUpPage}>Sign Up</button>
      </form>
    </div>
  </div>
}