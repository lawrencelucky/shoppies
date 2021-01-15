import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Aos from 'aos';
import 'aos/dist/aos.css';

import './SearchComponent.scss';

import SearchIcon from './../../assets/search.svg';
import ResultComponent from '../ResultComponent/ResultComponent';
import Pagination from '../Pagination/Pagination';

const SearchComponent = ({ user, nominatedMovies }) => {
  const [search, setSearch] = useState('');
  const [displayResults, setDisplayResults] = useState(false);
  const [searchResult, setSearchResult] = useState({});
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  const fetchSearchResults = event => {
    event.preventDefault();

    if (search !== '') {
      setDisplayResults(true);
      setLoading(true);
      axios
        .get(
          `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${search}`
        )
        .then(results => {
          setLoading(false);
          setSearchResult(results.data);
        })
        .catch(error => console.error(error));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchNextPage = () => {
    if (search !== '') {
      setDisplayResults(true);
      setLoading(true);
      setPageNumber(pageNumber + 1);
      axios
        .get(
          `http://www.omdbapi.com/?apikey=${
            process.env.REACT_APP_API_KEY
          }&s=${search}&page=${pageNumber + 1}`
        )
        .then(results => {
          setLoading(false);
          setSearchResult(results.data);
        })
        .catch(error => console.error(error));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const fetchPreviousPage = () => {
    if (search !== '') {
      setDisplayResults(true);
      setLoading(true);
      setPageNumber(pageNumber - 1);

      axios
        .get(
          `http://www.omdbapi.com/?apikey=${
            process.env.REACT_APP_API_KEY
          }&s=${search}&page=${pageNumber - 1}`
        )
        .then(results => {
          setLoading(false);
          setSearchResult(results.data);
        })
        .catch(error => console.error(error));
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div data-aos='fade-up' className='search'>
        <div className='search__container'>
          <h2 className='search__header'>
            Search for your favourite movies <br /> and nominate them.
          </h2>
          <div className='search__inputContainer'>
            <form onSubmit={fetchSearchResults}>
              <input
                value={search}
                onChange={event => {
                  setSearch(event.target.value);
                  setDisplayResults(false);
                  setLoading(true);
                  setPageNumber(1);
                }}
                type='text'
                placeholder='Search for movies here'
              />
              <img src={SearchIcon} alt='search-icon' />
              <button type='submit'></button>
            </form>
          </div>
        </div>
      </div>

      {displayResults && (
        <>
          <ResultComponent
            loading={loading}
            search={search}
            searchResult={searchResult}
            user={user}
            nominatedMovies={nominatedMovies}
          />
          {searchResult.Error ? (
            ''
          ) : (
            <Pagination
              pageNumber={pageNumber}
              searchResult={searchResult}
              fetchNextPage={fetchNextPage}
              fetchPreviousPage={fetchPreviousPage}
            />
          )}
        </>
      )}
    </>
  );
};

export default SearchComponent;
