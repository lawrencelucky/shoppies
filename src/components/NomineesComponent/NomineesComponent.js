import React from 'react';

import './NomineesComponent.scss';

import MovieCardComponent from '../MovieCardComponent/MovieCardComponent';

const NomineesComponent = () => {
  return (
    <div className='nominees'>
      <MovieCardComponent />
      <MovieCardComponent />
      <MovieCardComponent />
    </div>
  );
};

export default NomineesComponent;
