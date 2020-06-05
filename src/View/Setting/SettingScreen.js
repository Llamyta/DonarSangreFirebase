import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Alert} from 'react-native';

import CTextField from '../../Components/CTextField';
import Button from '../../Components/login/Button';
import FirebasePlugin, {firestore} from '../../Plugins/firebase/Firebase';

import Constants from '../../Config/Constants';
import Utils from '../../utils/utils';

const SettingScreen = () => {
  const [emailName, setEmailName] = useState('');
  const [errorEmailName, setErrorEmailName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateCTextField = () => {
    let isValidField = Utils.isValidField(emailName);
    isValidField ?
      setErrorEmailName('') :
      setErrorEmailName(Constants.STRING.ENTER_EMAIL);
    return isValidField;
  };

  const onPressAdd = () => {
    let isValid = validateCTextField();
    if (isValid) {
      addEmailRowToFirebase();
    } else {
      Alert.alert(Constants.STRING.REVIEW_EMAIL);
    }
  }

  const addEmailRowToFirebase = () => {
    setIsLoading(true);

    const emailRef = firestore.collection('prueba').doc();
    const userID = FirebasePlugin.auth().currentUser.uid;

    emailRef.set({
      emailID: emailRef.id,
      emailName: emailName,
      userID: userID,
    })
      .then(function () {
        setIsLoading(false);
        Alert.alert('Email creado:', emailRef.id);
      })
      .catch(function (error) {
        Alert.alert('Error al crear', error.message);
        setIsLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <CTextField
        value={emailName}
        autoCorrect={false}
        placeholder={Constants.STRING.ADD_EMAIL}
        error={errorEmailName}
        onChange={(newEmailName) => {
          setEmailName(newEmailName);
        }}
        onValidate={validateCTextField}
      />
      <Button
        titleButton={Constants.STRING.ADD_EMAIL_BUTTON}
        onPress={addEmailRowToFirebase}
        isLoading={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingScreen;
