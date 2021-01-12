import React from 'react';

import './SearchComponent.scss';

import SearchIcon from './../../assets/search.svg';

const SearchComponent = () => {
  return (
    <div className='search'>
      <div className='search__container'>
        <h2 className='search__header'>
          Search for your favourite movies <br /> and nominate them.
        </h2>
        <div className='search__inputContainer'>
          <input type='text' placeholder='Search for movies here' />
          <img src={SearchIcon} alt='search-icon' />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;
