import React from 'react';

import './LoaderComponent.scss';

const LoaderComponent = () => {
  return (
    <div className='lds-ellipsis'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoaderComponent;
