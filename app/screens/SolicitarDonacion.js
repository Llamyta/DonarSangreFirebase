import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    ToastAndroid
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as firebase from 'firebase';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

//clases
import Loading from '../components/Loading';
//imagenes
import { ScrollView } from 'react-native-gesture-handler';

const SolicitarDonacion = ({ navigation }) => {
    //Loading
    const [isVisibleLoading, setIsVisibleLoading] = useState(false);

    const Registrar = () => {

        ToastAndroid.showWithGravityAndOffset(
            "Solicitud Registrada",
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
            25,
            50,
        );
        console.log("Registrando");
    };
    const buttonTextStyle = {
        color: '#fff',
        backgroundColor: '#1196BA',
        paddingVertical: 5,
        paddingHorizontal: 25,
        borderRadius: 10,
        marginRight: -55,
    };
    const buttonTextStyleL = {
        color: '#fff',
        backgroundColor: '#1196BA',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 10,
        marginLeft: -55,
    };
    const progressStepsStyle = {
        activeStepIconBorderColor: '#1196BA',
        activeLabelColor: '#1196BA',
        activeStepNumColor: 'white',
        activeStepIconColor: '#1196BA',
        completedStepIconColor: '#1196BA',
        completedProgressBarColor: '#1196BA',
        completedCheckColor: 'white'
    };

    return (
        <View style={{ flex: 1 }}>
            <ProgressSteps  {...progressStepsStyle}>
                <ProgressStep
                    label="Informacion Personal"
                    nextBtnTextStyle={buttonTextStyle}
                >
                    <View style={{ alignItems: 'stretch', paddingHorizontal: '5%' }}>
                        <ScrollView >

                            <View style={styles.action}>

                                <TextInput
                                    onChange={""}
                                    placeholder="C.I"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.action}>

                                <TextInput
                                    onChange={""}
                                    placeholder="Nombre(s)"
                                    style={styles.textInput}
                                    autoCapitalize="words"
                                />

                            </View>

                            <View style={styles.action}>
                                <TextInput
                                    onChange={""}
                                    placeholder="Apellido Paterno"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />

                            </View>
                            <View style={styles.action}>

                                <TextInput
                                    onChange={""}
                                    placeholder="Apellido Materno"
                                    style={styles.textInput}
                                    autoCapitalize="none"
                                />

                            </View>

                        </ScrollView>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Second Step"
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyleL}
                >
                    <View style={{ alignItems: 'stretch', paddingHorizontal: '5%' }}>
                        <Text>This is the content within step 2!</Text>
                    </View>
                </ProgressStep>
                <ProgressStep
                    label="Third Step"
                    nextBtnTextStyle={buttonTextStyle}
                    previousBtnTextStyle={buttonTextStyleL}
                >
                    <View style={{ alignItems: 'stretch', paddingHorizontal: '5%' }} >
                        <Text>This is the content within step 3!</Text>
                    </View>
                </ProgressStep>
            </ProgressSteps>
        </View>

        // <View style={styles.container}>
        //     <StatusBar backgroundColor='#1196BA' barStyle="light-content" />

        //     <Animatable.View
        //         animation="fadeInUpBig"
        //         style={styles.footer}
        //     >

        //         <ScrollView>
        //        

        //         <Text style={[styles.text_footer, {
        //             marginTop: 35
        //         }]}>Genero</Text>
        //         <View style={styles.action}>

        //             <TextInput
        //                 onChange={ ""}
        //                 placeholder="Nombre(s)"
        //                 style={styles.textInput}
        //                 autoCapitalize="none"
        //             />

        //         </View>
        //         <Text style={[styles.text_footer, {
        //             marginTop: 35
        //         }]}>Tipo de sangre </Text>
        //         <View style={styles.action}>

        //             <TextInput
        //                 onChange={ ""}
        //                 placeholder="Nombre(s)"
        //                 style={styles.textInput}
        //                 autoCapitalize="none"
        //             />

        //         </View>
        //         <Text style={[styles.text_footer, {
        //             marginTop: 35
        //         }]}>Fecha de Nacimiento</Text>
        //         <View style={styles.action}>

        //             <TextInput
        //                 onChange={ ""}
        //                 placeholder="Nombre(s)"
        //                 style={styles.textInput}
        //                 autoCapitalize="none"
        //             />

        //         </View>
        //         <Text style={[styles.text_footer, {
        //             marginTop: 35
        //         }]}>Cantidad de Donadores</Text>
        //         <View style={styles.action}>

        //             <TextInput
        //                 onChange={ ""}
        //                 placeholder="Nombre(s)"
        //                 style={styles.textInput}
        //                 autoCapitalize="none"
        //             />

        //         </View>
        //         <Text style={[styles.text_footer, {
        //             marginTop: 35
        //         }]}>Telefono de Contacto</Text>
        //         <View style={styles.action}>

        //             <TextInput
        //                 onChange={ ""}
        //                 placeholder="Nombre(s)"
        //                 style={styles.textInput}
        //                 autoCapitalize="none"
        //             />

        //         </View>

        //         </ScrollView>

        //         <View style={styles.button}>
        //             <TouchableOpacity
        //                 onPress={Registrar}
        //                 style={[styles.signIn, {
        //                     borderColor: '#fa163f',
        //                     backgroundColor: '#fa163f',
        //                     borderWidth: 1,
        //                     marginTop: 15
        //                 }]}
        //             >
        //                 <Text style={[styles.textSign, {
        //                     color: '#fff'
        //                 }]}>Registrar Solicitud</Text>
        //             </TouchableOpacity>

        //             <Loading isVisible={isVisibleLoading} text="Registrando Solicitud" />
        //         </View>
        //     </Animatable.View>
        // </View>
    );
};

export default SolicitarDonacion;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },    
    miniatureStyle: {
        width: 70,
        height: 70,
        marginRight: 10,
    },    
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: '5%',
        borderBottomWidth: 0.2,
        borderBottomColor: '#a2a2a2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: 5,
        paddingLeft: 10,
        color: '#a2a2a2',
    },
});