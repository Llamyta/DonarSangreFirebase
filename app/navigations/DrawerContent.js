import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import * as firebase from 'firebase';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper'


import Icon from 'react-native-vector-icons/MaterialIcons'
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Fondo from '../../assets/bk2.png'


export function DrawerContent(props) {
    const {
        userInfo,
        userInfo:{uid, displayName, email, photoURL}
    }=props;
    console.log(userInfo);
    const changeAvatar =()=>{
        console.log("Cambiar avatar");
    };

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return (
        // <ImageBackground
        // source={Fondo}
        // style={styles.imageF}
        // >

            <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 50}}>
                        <Avatar.Image 
                            source={{
                                uri: photoURL ? photoURL:"https://api.adorable.io/avatars/267/abott@adorable.png"
                            }}
                            size={50}
                            onPress={changeAvatar}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                        <Title style={styles.title}>{displayName ? displayName:"Visita"}</Title>
                            <Caption style={styles.caption}>{email}</Caption>
                        </View>
                    </View>

                    <View style={styles.row}>
                        <View style={styles.section}>
                            <Paragraph style={[styles.paragraph, styles.caption]}>5</Paragraph>
                            <Caption style={styles.caption}>Blood Doner</Caption>
                        </View>
                    </View>
                </View>

                <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem 
                        icon={({size}) => (
                            <Icon 
                            name="today" 
                            color="#000"
                            size={size}
                            />
                        )}
                        label="Citas"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="favorite" 
                            color="#000"
                            size={size}
                            />
                        )}
                        label="Donar"
                        onPress={() => {props.navigation.navigate('Donar')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="room" 
                            color="#000"
                            size={size}
                            />
                        )}
                        label="Puntos de Donacion"
                        onPress={() => {props.navigation.navigate('Donaciones')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="create" 
                            color="#000"
                            size={size}
                            />
                        )}
                        label="Solicitar Donaciones"
                        onPress={() => {props.navigation.navigate('Solicita')}}
                    />
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icons 
                            name="account-outline" 
                            color="#000"
                            size={size}
                            />
                        )}
                        label="Perfil"
                        onPress={() => {props.navigation.navigate('Perfil')}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => {toggleTheme()}}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents="none">
                                <Switch value={isDarkTheme}/>
                            </View>
                        </View>
                    </TouchableRipple>
                </Drawer.Section>
            </View>
        </DrawerContentScrollView>
        {/**Cerrar sesion */}
        <Drawer.Section style={styles.bottomDrawerSection}>
            <DrawerItem 
                icon={({color, size}) => (
                    <Icon 
                    name="exit-to-app" 
                    color="#000"
                    size={size}
                    />
                )}
                label="Cerrar Sesion"
                onPress={() => firebase.auth().signOut()}
            />
        </Drawer.Section>
    </View>
        // </ImageBackground>
    );
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      
    },
    imageF: {
        flex: 1,
        resizeMode: 'cover',
        backgroundColor: '#fff'
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
      
    },
    drawerSection: {
      marginTop: 15,
      
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#1196BA',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });