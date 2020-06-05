import * as React from 'react';
import {useState,useEffect} from 'react';
import * as firebase from "firebase";
import { createDrawerNavigator } from '@react-navigation/drawer';
//Vistas
import Loading from '../screens/SplashScreen';

import NavNotLog from './NavNotLog';
import NavLog from './NavLog';

const Drawer = createDrawerNavigator();

function App() {
  const [login, setLogin] = useState(null);

  useEffect(() => {

    firebase.auth().onAuthStateChanged(user => {
      !user ? setLogin(false) : setLogin(true);
    })
  }, []);
  if (login === null) {
    return (
      <Loading isVisible={true} text="Cargando..."/>
    );
  }
  if (login) {
    return (
      <NavLog/>

    );
  }
  return (
    <NavNotLog/>
  );
}

export default App;