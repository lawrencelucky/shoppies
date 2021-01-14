import React from 'react';
import { Link } from 'react-router-dom';

import './HeaderComponent.scss';

import AppLogo from './../../assets/shopify.svg';

const HeaderComponent = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <Link to='/'>
          <img src={AppLogo} alt='logo' />
        </Link>
      </div>

      <div className='header__nav'>
        <ul>
          <Link to='/me'>
            <li>
              Hello <br /> <span>Lawrence</span>
            </li>
          </Link>
          <Link to='/nominees'>
            <li>
              Your <br /> <span>Nominees</span>
              <span className='nomineeCount'>
                <p>0</p>
              </span>
            </li>
          </Link>
          <button className='logout--btn'>Logout</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
