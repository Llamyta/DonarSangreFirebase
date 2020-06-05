import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import image from '../../assets/bk.png'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import getDirections from 'react-native-google-maps-directions'

export default function HomeScreen({ navigation }) {

    const borrar = async () => {
        console.log("Item Eliminado");

    }
    const handleGetDirections = () => {
        const data = {
            //    source: {
            //     latitude: -33.8356372,
            //     longitude: 18.6947617
            //   },
            destination: {
                latitude: -17.3883176,
                longitude: -66.1514658
            },
            params: [
                {
                    key: "travelmode",
                    value: "driving"        // may be "walking", "bicycling" or "transit" as well
                },
                {
                    key: "dir_action",
                    value: "navigate"       // this instantly initializes navigation using the given travel mode
                }
            ],
        }

        getDirections(data)
    }

    return (

        <View style={styles.container}>
            <ScrollView>
                <View style={styles.contenedorimg}>
                    <View style={styles.card}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image
                                style={styles.imageBackground}
                                resizeMode="cover"
                                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_83rpoxa509f?alt=media&token=b9a23ee4-e7a3-4edf-9612-96ab2b57da31' }}
                            />
                        </View>
                        <View style={styles.descripcion}>
                            <Text
                                style={styles.texto1}
                            >
                                Alvaro Mejia Fuentes
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                ID: 123123
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                Fecha: 24 de julio 2020
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                Hora: 14:30:00
                            </Text>
                        </View>
                        <View style={styles.boton}>

                            <View style={[styles.icono, { borderTopRightRadius: 20 }]}>
                                <Icon
                                    name="google-maps"
                                    color='#fff'
                                    size={26}
                                    onPress={handleGetDirections}
                                />
                            </View>
                            <View style={[styles.icono, { borderBottomRightRadius: 20 }]}>
                                <Icon
                                    name="delete"
                                    size={26}
                                    style={{ color: '#fff' }}
                                    onPress={borrar}
                                />
                            </View>

                        </View>
                    </View>
                </View>
                <View style={styles.contenedorimg}>
                    <View style={styles.card}>
                        <View style={{ justifyContent: 'center' }}>
                            <Image
                                style={styles.imageBackground}
                                resizeMode="cover"
                                source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/donarsangre-bf5c7.appspot.com/o/SolicitudSangre%2FSolicitudSangre_vwngirnr8o?alt=media&token=aabaa3ec-02d5-45f8-91bc-d2baf9525c1f' }}
                            />
                        </View>
                        <View style={styles.descripcion}>
                            <Text
                                style={styles.texto1}
                            >
                                Pamela Lopez Aranda
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                ID: 222222
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                Fecha: 21 de Mayo 2020
                            </Text>
                            <Text
                                style={styles.texto2}
                            >
                                Hora: 09:00:00
                            </Text>
                        </View>
                        <View style={styles.boton}>

                            <View style={[styles.icono, { borderTopRightRadius: 20 }]}>
                                <Icon
                                    name="google-maps"
                                    color='#fff'
                                    size={26}
                                    onPress={handleGetDirections}
                                />
                            </View>
                            <View style={[styles.icono, { borderBottomRightRadius: 20 }]}>
                                <Icon
                                    name="delete"
                                    size={26}
                                    style={{ color: '#fff' }}
                                    onPress={borrar}
                                />
                            </View>

                        </View>
                    </View>


                </View>


            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center'
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    contenedorimg: {
        flex: 4,
        paddingTop: 10
    },
    card: {
        justifyContent: 'flex-start',
        alignSelf: 'center',
        flexDirection: 'row',
        width: '90%',
        height: 170,
        backgroundColor: '#fff',
        borderWidth: 0.1,
        paddingHorizontal: 20,
        borderRadius: 20,

    },
    imageBackground: {
        borderColor: 'white',
        width: 80,
        height: 80,
        borderRadius: 100,
    },
    descripcion: {
        paddingHorizontal: '7%',
        justifyContent: 'center',

    },
    texto1: {
        fontWeight: 'bold',
        fontSize: 17
    },
    texto2: {
        color: '#888888',
        fontSize: 15
    },
    boton: {
        flex: 1,
        justifyContent: 'space-around',
        marginVertical: '5%'
    },
    icono: {
        backgroundColor: '#1196BA',
        width: 70,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',

    },
});
