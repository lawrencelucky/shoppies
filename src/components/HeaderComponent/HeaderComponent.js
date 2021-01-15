import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderComponent.scss';

import { auth } from './../../firebase';

import AppLogo from './../../assets/shopify.svg';

const HeaderComponent = ({ user, setUser, nominatedMovies, loading }) => {
  const logoutHandler = () => {
    auth.signOut();
    setUser('');
  };

  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img src={AppLogo} alt='logo' />
        </Link>
      </div>

      <div className='header__nav'>
        <ul>
          <Link to='/'>
            <li>
              Hello <br /> <span>{user?.email}</span>
            </li>
          </Link>
          <Link to='/nominees'>
            <li>
              Your <br /> <span>Nominees</span>
              <span className='nomineeCount'>
                <p>{loading ? `0` : nominatedMovies?.length}</p>
              </span>
            </li>
          </Link>
          <button onClick={logoutHandler} className='logout--btn'>
            Logout
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
