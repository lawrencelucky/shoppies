import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

import { auth } from './../../firebase';

import './LoginComponent.scss';

import LoaderComponent from '../LoaderComponent/LoaderComponent';

const LoginComponent = ({ setUser, setNotification }) => {
  const history = useHistory();
  const [displayLogin, setDisplayLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const signinHandler = event => {
    event.preventDefault();

    setLoading(true);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(authUser => {
        history.push('/');
        setUser(authUser);
        setLoading(false);
      })
      .catch(error => {
        if (
          error.message !== 'setUser is not a function' &&
          error.message !== 't is not a function'
        ) {
          setNotification(error.message);
          setLoading(false);
        }

        setTimeout(() => {
          setNotification('');
        }, 10000);
      });

    setEmail('');
    setPassword('');
  };

  const signupHandler = event => {
    event.preventDefault();

    setLoading(true);
    if (password === confirmPassword) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(authUser => {
          history.push('/');
          setUser(authUser);
          setLoading(false);
        })
        .catch(error => {
          if (
            error.message !== 'setUser is not a function' &&
            error.message !== 't is not a function'
          ) {
            setNotification(error.message);
            setLoading(false);
          }

          setTimeout(() => {
            setNotification('');
          }, 10000);
        });
    } else {
      setNotification('Passwords does not match. Try again.');
      setLoading(false);

      setTimeout(() => {
        setNotification('');
      }, 10000);
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div className='login'>
      <div className='login__header'>
        <p onClick={() => setDisplayLogin(true)}>Login</p>
        <p onClick={() => setDisplayLogin(false)}>Sign Up</p>
      </div>

      {loading ? (
        <div className='loginLoader'>
          <h1>Please wait</h1>
          <LoaderComponent />
        </div>
      ) : (
        <>
          {displayLogin && (
            <div data-aos='fade-up' className='login__container'>
              <form onSubmit={signinHandler}>
                <input
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  type='email'
                  placeholder='Your Email'
                />
                <input
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  type='password'
                  placeholder='Your Password'
                />
                <button onClick={signinHandler} type='submit'>
                  Login
                </button>
              </form>
            </div>
          )}

          {!displayLogin && (
            <div data-aos='fade-up' className='signup__container'>
              <form onSubmit={signupHandler}>
                <input
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  type='email'
                  placeholder='Your Email'
                />
                <input
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  type='password'
                  placeholder='Your Password'
                />
                <input
                  value={confirmPassword}
                  onChange={event => setConfirmPassword(event.target.value)}
                  type='password'
                  placeholder='Confirm Your Password'
                />
                <button onClick={signupHandler} type='submit'>
                  Sign Up
                </button>
              </form>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default LoginComponent;
