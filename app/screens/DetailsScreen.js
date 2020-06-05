import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
// //firebase
import FirebasePlugin, { firestore } from '../utils/Firebase'



const DetailsScreen = ({ navigation }) => {
  const [emailName, setEmailName] = useState('');

  const addEmailRowToFirebase = () => {
    const emailRef = firestore.collection('emails').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    emailRef.set({
      emailID: emailRef.id,
      emailName: emailName,
      userID: userID,
    })
      .then(function () {
        console.log('Email creado:', emailRef.id);
      })
      .catch(function (error) {
        console.log('Error al crear', error);
      });
  };
  const agregar=()=>{
    addEmailRowToFirebase();
  }

  return (
    <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start' }}>

      {/* MIO */}

      <Button
        title="<"
        onPress={() => navigation.goBack()}
        style={styles.boton}
      />

      {/* PDM */}
      <View style={styles.action}>

        <TextInput
          value={emailName}
          onChangeText={(newEmailName) => {
            setEmailName(newEmailName);
          }}
          placeholder="C.I"
          style={styles.textInput}
          autoCapitalize="none"
          
        ></TextInput>

      </View>

      <Button
        title="Registrar"
        onPress={agregar}
        style={styles.boton}
      />


    </View>
  );
};
const styles = StyleSheet.create({
  boton: {
    width: 100
  },
  textInput: {
    flex: 1,
    marginTop: 20,
    paddingLeft: 10,
    color: '#fff'
  },
  action: {
    flexDirection: 'row',
    marginTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    paddingHorizontal: 5
  },
});
export default DetailsScreen;