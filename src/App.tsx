import React, {useEffect} from 'react';
import './App.css';
import {Firebase} from './firebase/firebase';
import SignUpScreen from './screens/sign-up/SignUpScreen';

const App = () => {
  useEffect(() => {
    Firebase.init();
  }, []);

  return (
    <SignUpScreen />
  );
};

export default App;
