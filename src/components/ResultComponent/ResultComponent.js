import React from 'react';

import './ResultComponent.scss';

import MovieCardComponent from '../MovieCardComponent/MovieCardComponent';
import LoaderComponent from '../LoaderComponent/LoaderComponent';

const ResultComponent = ({ search, searchResult, loading }) => {
  return (
    <div className='result'>
      <div className='result__container'>
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
                <div className='loader__container'>
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
