import React, { useState } from 'react';

import './HeaderComponent.scss';

import AppLogo from './../../assets/shopify.svg';
import NomineesComponent from '../NomineesComponent/NomineesComponent';

const HeaderComponent = () => {
  const [displayNominees, setDisplayNominees] = useState(false);

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
          <li onClick={() => setDisplayNominees(!displayNominees)}>
            Your <br /> <span>Nominees</span>
            <span className='nomineeCount'>
              <p>0</p>
            </span>
          </li>
          <button className='logout--btn'>Logout</button>
        </ul>
      </div>

      {displayNominees && <NomineesComponent />}
    </div>
  );
};

export default HeaderComponent;
