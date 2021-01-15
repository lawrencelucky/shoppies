import React from 'react';

import './Pagination.scss';

import LeftArrow from './../../assets/left-arrow.svg';
import RightArrow from './../../assets/right-arrow.svg';

const Pagination = ({
  pageNumber,
  fetchPreviousPage,
  searchResult,
  fetchNextPage,
  loading,
}) => {
  return (
    <div className='pagination'>
      <div className='pagination__container'>
        {pageNumber > 1 ? (
          <img
            className='pagination--leftArrow'
            onClick={fetchPreviousPage}
            src={LeftArrow}
            alt=''
          />
        ) : (
          ''
        )}
        <p className='pageNumber'>
          {pageNumber} of{' '}
          {loading ? `0` : Math.ceil(searchResult.totalResults / 10)}
        </p>
        {Math.ceil(searchResult.totalResults / 10) > 1 &&
        pageNumber * 10 <= searchResult.totalResults ? (
          <img
            className='pagination--rightArrow'
            onClick={fetchNextPage}
            src={RightArrow}
            alt=''
          />
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Pagination;
