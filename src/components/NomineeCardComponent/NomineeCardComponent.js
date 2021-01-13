import React from 'react';

import './NomineeCardComponent.scss';

const NomineeCardComponent = () => {
  return (
    <div className='nomineeCard'>
      <div className='nomineeCard__image'>
        <img
          src='https://images.unsplash.com/photo-1610570426407-efa770f9d31a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
          alt=''
        />
      </div>
      <div className='nomineeCard__content'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
        <button className='remove--btn'>Remove</button>
      </div>
    </div>
  );
};

export default NomineeCardComponent;
