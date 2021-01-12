import React from 'react';

import './HeaderComponent.scss';

import AppLogo from './../../assets/shopify.svg';

const HeaderComponent = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={AppLogo} alt='logo' />
      </div>

      <div className='header__nav'>
        <ul>
          <li>
            Hello <br /> <span>Lawrence</span>
          </li>
          <li>
            Your <br /> <span>Nominees</span>
            <span className='nomineeCount'>
              <p>0</p>
            </span>
          </li>
          <button className='logout--btn'>Logout</button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
