import React from 'react';

import './NomineesComponent.scss';

import NomineeCardComponent from '../NomineeCardComponent/NomineeCardComponent';

const NomineesComponent = () => {
  return (
    <div className='nominees'>
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
