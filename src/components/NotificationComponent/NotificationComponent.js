import React from 'react';

import './NotificationComponent.scss';

const NotificationComponent = ({ message }) => {
  return (
    <div className='notification'>
      <p>{message}</p>
    </div>
  );
};

export default NotificationComponent;
