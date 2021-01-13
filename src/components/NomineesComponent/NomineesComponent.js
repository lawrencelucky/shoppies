import React from 'react';

import './NomineesComponent.scss';

import NomineeCardComponent from '../NomineeCardComponent/NomineeCardComponent';

const NomineesComponent = () => {
  return (
    <div className='nominees'>
      <NomineeCardComponent />
    </div>
  );
};

export default NomineesComponent;
