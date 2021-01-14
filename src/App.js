import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import NomineesComponent from './components/NomineesComponent/NomineesComponent';
import SearchComponent from './components/SearchCompoent/SearchComponent';

function App() {
  return (
    <div className='app'>
      <Router>
        <HeaderComponent />
        <Switch>
          <Route path='/nominees'>
            <NomineesComponent />
          </Route>
          <Route path='/me'></Route>
          <Route path='/'>
            <SearchComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
