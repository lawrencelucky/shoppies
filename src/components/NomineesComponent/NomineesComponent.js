import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './NomineesComponent.scss';

import NomineeCardComponent from '../NomineeCardComponent/NomineeCardComponent';

const NomineesComponent = ({ nominatedMovies }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  return (
    <div data-aos='fade-up' className='nominees'>
      <div className='nominees__container'>
        <h2 className='nominees__header'>Your nominated movies.</h2>

        <div className='nomineesCard__container'>
          {nominatedMovies?.map((movies, index) => (
            <NomineeCardComponent
              key={index}
              title={movies.title}
              image={movies.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NomineesComponent;
