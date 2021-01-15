import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import { auth } from './firebase';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import NomineesComponent from './components/NomineesComponent/NomineesComponent';
import SearchComponent from './components/SearchCompoent/SearchComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(auth => {
      setUser(auth);
      setLoading(false);
    });
  }, []);

  return (
    <div className='app'>
      {!user ? (
        <>
          {loading ? (
            <div className='appLoader'>
              <h1>Please wait</h1>
              <LoaderComponent />
            </div>
          ) : (
            <LoginComponent />
          )}
        </>
      ) : (
        <Router>
          <HeaderComponent setUser={setUser} user={user} />
          <Switch>
            <Route path='/nominees'>
              <NomineesComponent />
            </Route>
            <Route path='/'>
              <SearchComponent />
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
