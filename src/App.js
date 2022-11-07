import React, { useEffect } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Feed from './components/Feed';
import Widgets from './components/Widgets';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout, login } from './features/userSlice';
import { auth } from './firebase';
import './App.css';


function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            dispalyName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        // user not logged
        dispatch(logout());
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="app">

      <Header />

      {!user ? (
        <Login />
      ) : (
        <AppBody>
          <Sidebar />
          <Feed />
          <Widgets />
        </AppBody>
      )}

    </div >
  );
}

const AppBody = styled.div`
  display: flex;
  margin-top: 35px;
  max-width: 1200px;
  margin-left: 20px;
  margin-right: 20px;
`;

export default App;
