import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//Vistas
import RootStackScreen from './RootStackScreen';
const Drawer = createDrawerNavigator();
function App() {
  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>

  );
}

export default App;