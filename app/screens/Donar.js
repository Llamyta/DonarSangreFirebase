import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import SliderDonaciones from '../components/sliderDonaciones';
import Cards from '../components/Cards';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

]
export default function Donar() {

    return (
        <View style={styles.container}>
            <View style={styles.carouselContainer}>
                <SliderDonaciones />
            </View>
            <View style={styles.carouselContainer2}>
                <SliderDonaciones />
            </View>
            <View>
                <Text style={styles.text}>Tambien puedes donar en los puntos de acopio</Text>
                <View>
                    <Cards/>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    carouselContainer: {
        height: 0,
        width: 200,
        borderWidth: 5,
        borderColor: 'transparent',
        marginTop: 10
    },
    carouselContainer2: {
        width: 200,
        height: 250 * 0.8,
        marginTop: 10
    },
    text: {
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 20,
    },
    
    
});


