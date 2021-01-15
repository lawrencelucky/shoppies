import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './NomineesComponent.scss';

import NomineeCardComponent from '../NomineeCardComponent/NomineeCardComponent';

const NomineesComponent = () => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div data-aos='fade-up' className='nominees'>
      <div className='nominees__container'>
        <h2 className='nominees__header'>Your nominees</h2>

        <div className='nomineesCard__container'>
          <NomineeCardComponent />
          <NomineeCardComponent />
          <NomineeCardComponent />
          <NomineeCardComponent />
          <NomineeCardComponent />
        </div>
      </div>
    </div>
  );
};

export default NomineesComponent;
