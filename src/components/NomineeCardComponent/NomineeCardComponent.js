import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './NomineeCardComponent.scss';

const NomineeCardComponent = ({ image, title }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className='nomineeCard' data-aos='fade-up'>
      <div className='nomineeCard__image'>
        <img src={image} alt='' />
      </div>
      <div className='nomineeCard__content'>
        <p>{title}</p>
        <button className='remove--btn'>Remove</button>
      </div>
    </div>
  );
};

export default NomineeCardComponent;
