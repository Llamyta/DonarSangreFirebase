import * as React from 'react';
import { useState, useEffect } from 'react';
import * as firebase from "firebase";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from './DrawerContent';
//vistas
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/Donar';
import DonacionesScreen from '../screens/Donaciones';
import SolicitarScreen from '../screens/SolicitarDonacion'
import MainTabScreen from './MainTabScreen';
import Perfil from '../screens/DetailsScreen';
const Drawer = createDrawerNavigator();
function App() {
    const [userInfo,setUserInfo] = useState({});
    useEffect(()=>{
        (async()=>{
            const user=await firebase.auth().currentUser;
            setUserInfo(user.providerData[0]);
        })();
    },[]);

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <DrawerContent {...props} userInfo={userInfo} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                {/* <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Donar" component={DetailsScreen} />
                <Drawer.Screen name="Donaciones" component={DonacionesScreen} />
                <Drawer.Screen name="Solicita" component={SolicitarScreen} /> */}
                <Drawer.Screen name="Perfil" component={Perfil} />
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default App;