import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ImageBackground
} from 'react-native';
//librerias
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';
//imagenes
import Img from '../../assets/bk.png'

const SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={Img}
            style={styles.image}
            >
                <View >
                    <View style={styles.card}>

                    </View>
                    <Text style={styles.text}>Dona Sangre</Text>

                </View>
            </ImageBackground>
        </View>
    );
};



const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'flex-start',
        backgroundColor:'white',
        
      },
      image: {
        flex: 1,
        resizeMode: "cover",
        alignItems:'center',
        paddingTop:'20%',
      },
      card:{
        width:'40%',
        height:150,
        backgroundColor:'white',
        borderRadius:50
      },
      text:{
          color:'white',
          fontWeight:'bold',
          fontSize:24
      },
});
export default SplashScreen;