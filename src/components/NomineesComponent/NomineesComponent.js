import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './NomineesComponent.scss';

import { db } from '../../firebase';

import NomineeCardComponent from '../NomineeCardComponent/NomineeCardComponent';
import LoaderComponent from './../LoaderComponent/LoaderComponent';

const NomineesComponent = ({ user, nominatedMovies, loading }) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  });

  const removeNomineeHandler = id => {
    db.collection('users')
      .doc(user.uid)
      .collection('nominees')
      .doc(id)
      .delete();
  };

  return (
    <div data-aos='fade-up' className='nominees'>
      <div className='nominees__container'>
        {nominatedMovies.length > 0 ? (
          <>
            <h2 className='nominees__header'>Your nominated movies.</h2>

            <div className='nomineesCard__container'>
              {loading ? (
                <div className='nomineesLoader'>
                  <h1>Please wait</h1>
                  <LoaderComponent />
                </div>
              ) : (
                nominatedMovies?.map((movies, index) => (
                  <NomineeCardComponent
                    key={index}
                    title={movies.title}
                    image={movies.image}
                    removeNomineeHandler={() => removeNomineeHandler(movies.id)}
                  />
                ))
              )}
            </div>
          </>
        ) : (
          <h2 className='nominees__header'>You have no nominated movie.</h2>
        )}
      </div>
    </div>
  );
};

export default NomineesComponent;
