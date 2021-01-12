import React from 'react';

import './MovieCardComponent.scss';

import JumanjiImg from './../../assets/jumanji.jpg';

const MovieCardComponent = () => {
  return (
    <div className='movieCard'>
      <div className='movieCard__image'>
        <img src={JumanjiImg} alt='jumanji' />
      </div>
      <div className='movieCard__content'>
        <div className='movie__details'>
          <h2 className='movie__title'>Jumanji: The Next Level</h2>
          <p className='movie__year'>2019</p>
        </div>
        <button disabled={true} className='nominate--btn'>
          Nominate
        </button>
      </div>
    </div>
  );
};

export default MovieCardComponent;
