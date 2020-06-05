import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground,
    ScrollView
} from 'react-native';
//librerias
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
//imagenes
import Logo from '../../assets/ondas.png';
import Img from '../../assets/homeq.png'
import Img2 from '../../assets/homeq(3).png'
import Fondo from '../../assets/bk2.png'


const { height } = Dimensions.get("screen");
const { width } = Dimensions.get("screen");
const Splash2 = ({ navigation }) => {
    return (
        <ScrollView
            horizontal
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
        >
            <View style={[styles.container, { paddingHorizontal: 30 }]}>
                <View style={styles.header}>
                    <Animatable.Image
                        source={Img2}
                        style={styles.image}
                        animation="bounceIn"
                    />
                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUpBig"
                >
                    <Text style={[styles.title, { textAlign: 'center' }]}>Registrate!</Text>
                    <Text style={[styles.title, { textAlign: 'center', color: '#1196BA', fontSize: 17 }]}>Tu tambien puedes ser un heroe</Text>

                </Animatable.View>
            </View>
            <View style={[styles.container, { backgroundColor: '#1196BA' }]}>
                <View style={styles.header}>
                    <Animatable.Image
                        source={Img2}
                        style={styles.image}
                        animation="bounceIn"
                    />
                </View>
                <Animatable.View
                    style={styles.footer}
                    animation="fadeInUpBig"
                >

                    <View style={styles.efecto}>
                        <Animatable.View
                            style={styles.icono}
                            animation="zoomIn"
                            duration={5000}

                        >

                            <MaterialIcons
                                name="chevron-left"
                                color={'#fff'}
                                size={25}
                            />
                        </Animatable.View>

                        <View style={styles.txt}>
                            <Text style={[styles.title, { color: '#fff', textAlign: 'center', paddingRight: '15%' }]}>Reserva tus citas de manera rapida</Text>
                        </View>
                    </View>
                </Animatable.View>
            </View>
            <View style={[styles.container, { width: width }]}>
                <ImageBackground
                    source={Fondo}
                    style={styles.imageF}
                >
                    <View style={styles.header}>
                        <Animatable.Image
                            source={Img}
                            style={styles.image}
                            animation="bounceIn"
                        />
                    </View>

                    <Animatable.View
                        style={[styles.footer]}
                        animation="fadeInUpBig"
                    >

                        <View style={[styles.efecto]}>
                            <View style={[styles.icono, { backgroundColor: '#fff' }]}>

                                <MaterialIcons
                                    name="chevron-left"
                                    color={'#1196BA'}
                                    size={25}
                                />
                            </View>
                            <View style={[styles.txt, { paddingRight: '8%' }]}>
                                <Text style={styles.title}>Dona Sangre!!</Text>
                                <Text style={styles.text}>Puedes Salvar hasta 3 Vidas... Lo sabias?</Text>
                                <View style={styles.button}>

                                    <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
                                        <LinearGradient
                                            colors={['#1196BA', '#1196BA']}
                                            style={styles.signIn}
                                        >
                                            <Text style={styles.textSign}>Quiero Donar</Text>
                                            <MaterialIcons
                                                name="navigate-next"
                                                color={'#ffffff'}
                                                size={20}
                                            />
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Animatable.View>
                </ImageBackground>
            </View>
        </ScrollView>
    );
};




const height_logo = height * 0.28;
const widthC = width * 0.98;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: widthC
    },
    efecto: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    icono: {
        flex: 1,
        marginLeft: -30,
        backgroundColor: '#1196BA',
        height: '30%',
        justifyContent: 'center',
        paddingLeft: '3%',
        borderRadius: 20
    },
    txt: {
        flex: 4,

    },
    imageF: {
        flex: 1,
        resizeMode: "cover",
        alignItems: 'stretch',
        paddingTop: '20%',
    },
    header: {
        flex: 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
        zIndex: 1000
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'transparent',
        paddingVertical: 50,
    },
    logo: {
        width: height_logo,
        height: height_logo
    },
    image: {
        flex: 0,
        width: 300,
        height: 190,
        //ajustar el contenido de la imagen
        resizeMode: 'stretch'
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        color: 'grey',
        marginTop: 5, 
        fontSize:15,
        fontWeight:'bold'
    },
    button: {
        alignItems: 'flex-end',
        marginTop: 50
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
});
export default Splash2;