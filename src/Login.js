import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';
import img from './images/image-removebg-preview (1).png';


function Login() {
  const navigate = useNavigate(); // Updated from useHistory to useNavigate
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/'); // Corrected navigation method
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Successfully created a new user with email and password
        if (auth) {
          navigate('/'); // Corrected navigation method
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src={img}
          alt='Amazon Logo'
        />
      </Link>

      <div className='login__container'>
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type='submit'
            onClick={signIn} // Added onClick event handler
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the PRIMEPICKS Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button
          onClick={register} // Added onClick event handler
          className='login__registerButton'
        >
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
