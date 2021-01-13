import React, { useState } from 'react';

import './MovieCardComponent.scss';

const MovieCardComponent = ({ image, title, year }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isVaildSrc, setIsValidSrc] = useState(!!title);

  return (
    <div className='movieCard'>
      <div className='movieCard__image'>
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
      <div className='movieCard__content'>
        <div className='movie__details'>
          <h2 className='movie__title'>{title}</h2>
          <p className='movie__year'>{year}</p>
        </div>
        <button className='nominate--btn'>Nominate</button>
      </div>
    </div>
  );
};

export default MovieCardComponent;
