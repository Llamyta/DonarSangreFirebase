import 'react-native-gesture-handler';
import {  StatusBar,  YellowBox, } from 'react-native'

import {decode, encode} from 'base-64';
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import React from 'react';
import MainNavigator from './app/navigations/Navigation';

YellowBox.ignoreWarnings(["Setting a timer", "FlatList"]);
const App: () => React$Node = () => {
  return (
  <>
   <StatusBar backgroundColor='#1196BA' barStyle="light-content" />
  <MainNavigator />
  </>
  );
};

export default App;
