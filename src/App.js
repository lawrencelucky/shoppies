import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import { auth, db } from './firebase';

import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import NomineesComponent from './components/NomineesComponent/NomineesComponent';
import SearchComponent from './components/SearchCompoent/SearchComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import LoaderComponent from './components/LoaderComponent/LoaderComponent';
import NotificationComponent from './components/NotificationComponent/NotificationComponent';

function App() {
  const [user, setUser] = useState(null);
  const [nominatedMovies, setNominatedMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState('');

  useEffect(() => {
    setLoading(true);
    auth.onAuthStateChanged(authUser => {
      setUser(authUser);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    if (user) {
      setLoading(true);
      db.collection('users')
        .doc(user.uid)
        .collection('nominees')
        .orderBy('timestamp', 'asc')
        .onSnapshot(snapshot => {
          setNominatedMovies(
            snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
          );
          setLoading(false);
        });
    }
  }, [user]);

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
            <>
              <LoginComponent setNotification={setNotification} />
              {notification && <NotificationComponent message={notification} />}
            </>
          )}
        </>
      ) : (
        <Router>
          <HeaderComponent
            setUser={setUser}
            user={user}
            nominatedMovies={nominatedMovies}
            loading={loading}
          />
          <Switch>
            <Route path='/nominees'>
              <NomineesComponent
                user={user}
                nominatedMovies={nominatedMovies}
                setNominatedMovies={setNominatedMovies}
                loading={loading}
              />
            </Route>
            <Route path='/'>
              <SearchComponent
                user={user}
                nominatedMovies={nominatedMovies}
                setNotification={setNotification}
              />
              {notification && <NotificationComponent message={notification} />}
            </Route>
          </Switch>
        </Router>
      )}
    </div>
  );
}

export default App;
