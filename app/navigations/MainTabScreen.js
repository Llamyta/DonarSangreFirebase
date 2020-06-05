import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as firebase from 'firebase';
//vistas
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/Donar';
import DonacionesScreen from '../screens/Donaciones';
import SolicitarScreen from '../screens/SolicitarDonacion'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const DonacionesStack = createStackNavigator();
const SolicitarStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
const Cerrar = () =>{
    console.log("cerrar la sesion");
    firebase.auth().signOut();
    
};


const MainTabScreen = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            activeColor="#1196BA"
            inactiveColor="#000"
        >
            <Tab.Screen
                name="Home"
                /**necesito crearlo abajo para poder tener el header */
                component={HomeStackScreen}
                
                options={{
                    tabBarLabel: 'Citas',
                    tabBarColor: '#fff',
                    borderTop:0.2,
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="today" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Donar"
                component={DetailsStackScreen}
                options={{
                    tabBarLabel: 'Donar',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="favorite" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Donaciones"
                component={DonacionesStackScreen}
                options={{
                    tabBarLabel: 'Puntos',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="room" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Solicita"
                component={SolicitarStackScreen}
                options={{
                    tabBarLabel: 'Solicita',
                    tabBarColor: '#fff',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="home" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );

};


const HomeStackScreen = ({ navigation }) => {
    return (
        <HomeStack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#fff'
                },
                headerTintColor: '#000',
                headerTitleStyle: {
                    fontSize: 18
                }
            }}
        >
            <HomeStack.Screen
                name="Citas Pendientes"
                component={HomeScreen}
                options={{
                    headerLeft: () => (
                        <MaterialCommunityIcons.Button
                            name="menu"
                            size={25}
                            backgroundColor='#fff'
                            color='#000'
                            onPress={() => { navigation.openDrawer()}}
                        />


                    )
                }}
            />
        </HomeStack.Navigator>
    );

};

const DetailsStackScreen = ({ navigation }) => {
    return (
        <DetailsStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontSize: 18
            }
        }}
        >
            <DetailsStack.Screen
                name="Donar"
                component={DetailsScreen}
                options={{
                    headerLeft: () => (
                        <MaterialCommunityIcons.Button
                            name="menu"
                            size={25}
                            backgroundColor='#fff'
                            color='#000'
                            onPress={() => { navigation.openDrawer() }}
                        />
                    )
                }}
            />
        </DetailsStack.Navigator>
    );

};

const DonacionesStackScreen = ({ navigation }) => {
    return (
        <DonacionesStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontSize: 18
            }
        }}
        >
            <DonacionesStack.Screen
                name="Puntos de Donacion"
                component={DonacionesScreen}
                options={{
                    headerLeft: () => (
                        <MaterialCommunityIcons.Button
                            name="menu"
                            size={25}
                            backgroundColor='#fff'
                            color='#000'
                            onPress={console.log("Configuraciones"),() => { navigation.openDrawer() }}
                        />
                    ),
                    headerRight:()=>(
                        <MaterialCommunityIcons.Button
                            name="logout-variant"
                            size={25}
                            backgroundColor='#fff'
                            color='#000'
                            onPress={Cerrar}
                        />
                    )
                }}
            />
        </DonacionesStack.Navigator>
    );

};

const SolicitarStackScreen = ({ navigation }) => {
    return (
        <SolicitarStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: '#fff'
            },
            headerTintColor: '#000',
            headerTitleStyle: {
                fontSize: 18
            }
        }}
        >
            <SolicitarStack.Screen
                name="Solicita Donaciones"
                component={SolicitarScreen}

                options={{
                    headerLeft: () => (
                        <MaterialCommunityIcons.Button
                            name="menu"
                            size={25}
                            backgroundColor='#fff'
                            color='#000'
                            onPress={() => {
                                navigation.openDrawer()

                            }}
                        />
                    )
                }}
            />
        </SolicitarStack.Navigator>
    );

};
export default MainTabScreen;