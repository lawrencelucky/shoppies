import React from 'react';

import './Pagination.scss';

const Pagination = ({
  pageNumber,
  fetchPreviousPage,
  searchResult,
  fetchNextPage,
}) => {
  return (
    <div className='pagination'>
      <div className='pagination__container'>
        {pageNumber > 1 ? (
          <button className='previous--btn' onClick={fetchPreviousPage}>
            Previous
          </button>
        ) : (
          ''
        )}
        <p className='pageNumber'>{pageNumber}</p>
        {Math.ceil(searchResult.totalResults / 10) > 1 &&
        pageNumber * 10 <= searchResult.totalResults ? (
          <button className='next--btn' onClick={fetchNextPage}>
            Next
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Pagination;
