import React from 'react';

import './ResultComponent.scss';

import MovieCardComponent from '../MovieCardComponent/MovieCardComponent';

const ResultComponent = () => {
  return (
    <div className='result'>
      <div className='result__container'>
        <div className='result__header'>
          <p>Results for jumanji</p>
        </div>
        <div className='results'>
          <MovieCardComponent />
          <MovieCardComponent />
          <MovieCardComponent />
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
