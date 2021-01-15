import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './ResultComponent.scss';

import MovieCardComponent from '../MovieCardComponent/MovieCardComponent';
import LoaderComponent from '../LoaderComponent/LoaderComponent';

const ResultComponent = ({
  search,
  searchResult,
  loading,
  user,
  nominatedMovies,
}) => {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className='result'>
      <div className='result__container' data-aos='fade-up'>
        <div className='result__header'>
          <p>
            Results for <span>{search}</span>
          </p>
          <p>
            {searchResult.Error ? (
              ''
            ) : (
              <>
                <span>{loading ? `0` : searchResult.totalResults}</span> total
                results
              </>
            )}
          </p>
        </div>
        <div className='results'>
          {!searchResult.Error ? (
            <>
              {loading ? (
                <div className='resultLoader'>
                  <h1>Please wait</h1>
                  <LoaderComponent />
                </div>
              ) : (
                <>
                  {searchResult.Search?.map((result, index) => (
                    <MovieCardComponent
                      key={index}
                      image={result.Poster}
                      title={result.Title}
                      year={result.Year}
                      imdbID={result.imdbID}
                      user={user}
                      nominatedMovies={nominatedMovies}
                    />
                  ))}
                </>
              )}
            </>
          ) : (
            <div className='no--results'>
              <p>No results for {search}</p>
              <span>You should check your spelling.</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResultComponent;
