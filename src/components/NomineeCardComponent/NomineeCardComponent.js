import React, { useState, useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './NomineeCardComponent.scss';

const NomineeCardComponent = ({ image, title, removeNomineeHandler }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVaildSrc, setIsValidSrc] = useState(!!title);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className='nomineeCard' data-aos='fade-up'>
      <div className='nomineeCard__image'>
        {isVaildSrc ? (
          <>
            <img
              src={image}
              alt={title}
              className={`moviePoster moviePoster-${
                imageLoaded ? 'visible' : 'hidden'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setIsValidSrc(false)}
            />
            {!imageLoaded && (
              <div className='loader'>
                <p>Loading...</p>
              </div>
            )}
          </>
        ) : (
          <div className='noMoviePoster'>
            <p>Image not available</p>
          </div>
        )}
      </div>
      <div className='nomineeCard__content'>
        <p>{title}</p>
        <button onClick={removeNomineeHandler} className='remove--btn'>
          Remove
        </button>
      </div>
    </div>
  );
};

export default NomineeCardComponent;
