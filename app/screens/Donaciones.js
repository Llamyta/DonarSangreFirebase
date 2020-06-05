import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
//maps
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
// import Geolocation from '@react-native-community/geolocation';
import { request, PERMISSIONS } from 'react-native-permissions';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Maps from '../components/Maps'
export default function Donaciones() {
    
    return (
        
        <Maps/>
        

    );
}
const styles = StyleSheet.create({
    map: {
        height: '100%'
    },
    container: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
    },
    bubble: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 15,
        width: 150,
    },
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
    },
    name: {
        fontSize: 16,
        marginBottom: 5,
    },
    image: {
        width: 120,
        height: 80,
    },


});