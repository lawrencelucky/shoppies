import React from 'react';

import './App.scss';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ResultComponent from './components/ResultComponent/ResultComponent';
import SearchComponent from './components/SearchCompoent/SearchComponent';

function App() {
  return (
    <div className='app'>
      <HeaderComponent />
      <SearchComponent />
      <ResultComponent />
    </div>
  );
}

export default App;
