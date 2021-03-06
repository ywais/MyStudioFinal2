import { useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Home from './components/Home';
import About from './components/About';
import Gallery from './components/Gallery';
import PrivateRouter from './components/PrivateRouter';
import './App.css';

if(!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyCT2X4ak356lSMmFG93z6IdF_HfTPiMq5s',
    authDomain: 'derech-haketzev.firebaseapp.com',
    projectId: 'derech-haketzev',
    storageBucket: 'derech-haketzev.appspot.com',
    messagingSenderId: '793610760529',
    appId: '1:793610760529:web:ab1e88f4fb1bac9e616370',
    measurementId: 'G-V4ZBT294V6'
  });
  } else {
  firebase.app();
}

const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  const [authorize, setAuthorize] = useState('');
  
  const checkUser = async () => {
    setTimeout(() => {
      setAuthorize(user ? 'authorized' : 'unauthorized');
    }, 500);
  }
  
  useEffect(() => {
    checkUser();
  }, [user])


// TODO: don't redirect to login if authorized
// TODO: fix checkUser

console.log(user);

  return (
    <div className='app'>
      <Navbar user={user}/>
      <div className='pageContainer'>
        <Sidebar />
        <div className='page'>
          <img id='backgroundLogo' src='clean_logo.png' alt='background-logo' draggable='false'/>
          {(user || authorize === 'authorized') && (
            <PrivateRouter user={user} firebase={firebase}/>
          )}
          {authorize === 'unauthorized' && (
            <BrowserRouter>
              <Switch>
                <Route exact path='/user'>
                  <div className='signMethods'>
                    <SignIn user={user} />
                    <div className='vertical'></div>
                    <SignUp user={user} />
                  </div>
                </Route>
                <Route exact path='/'>
                  <Home user={user} />
                </Route>
                <Route exact path='/about'>
                  <About user={user} />
                </Route>
                <Route exact path='/gallery'>
                  <Gallery user={user} />
                </Route>
                {/* <Route path='/*'>
                  <Redirect
                    to={{
                      pathname: '/login',
                    }}
                  />
                </Route> */}
                <Route path='/*'>
                  <div className='signMethods'>
                    <SignIn user={user} />
                    <div className='vertical'></div>
                    <SignUp user={user} />
                  </div>
                </Route>
              </Switch>
            </BrowserRouter>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
