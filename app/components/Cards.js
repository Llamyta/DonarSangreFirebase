import React from 'react';
import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native';
import SliderDonaciones from '../components/sliderDonaciones';
import { Card, ListItem } from 'react-native-elements'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';



const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },

]
export default function Cards() {

    return (
        <View style={styles.cards}>
            <View
                style={{
                    width: 200,
                    height: 200
                }}>
                <Card>

                    <Image
                        style={styles.imageBackground}
                        resizeMode="cover"
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_r30bxctcmmf?alt=media&token=ebb8ae11-0825-441c-99ee-509b7772260b" }}
                    />
                    <Button
                        icon={<Icon name='code' color='#fff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Belga' />

                </Card>
            </View>
            <View
                style={{
                    width: 200,
                    height: 200
                }}>
                <Card>

                    <Image
                        style={styles.imageBackground}
                        resizeMode="cover"
                        source={{ uri: "https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_msxgstt6rp?alt=media&token=9b89d515-7ff2-42e8-adb5-39e861acbc43" }}
                    />
                    <Button
                        icon={<Icon name='code' color='#fff' />}
                        buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                        title='Los Angeles' />

                </Card>
            </View>

        </View>

    );
}
const styles = StyleSheet.create({
    cards: {
        flex: 2,
        flexDirection: 'row',
        paddingTop: 50
    },
    imageBackground: {
        backgroundColor: '#fff',
        borderWidth: 5,
        borderColor: 'white',
        width: 150,
        height: 150,
      },
});


