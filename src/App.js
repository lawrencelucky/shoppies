import React from 'react';

import './App.scss';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import SearchComponent from './components/SearchCompoent/SearchComponent';

function App() {
  return (
    <div className='app'>
      <HeaderComponent />
      <SearchComponent />
    </div>
  );
}

export default App;
