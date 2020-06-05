import React from 'react';
import {StyleSheet, View, Text, TextInput, Image} from 'react-native';

import Colors from '../../Config/Colors';
import Constants from '../../Config/Constants';

const EmailTextField = ({
  onChangeText,
  onEndEditing,
  error,
  source,
  placeholder,
  secureTextEntry,
  autoCorrect,
}) => {
  return (
    <View>
      <Text style={styles.errorText}>{error}</Text>
      <View style={styles.textFieldView}>
        <Image style={styles.inlineImg} source={source} />
        <TextInput
          style={styles.textField}
          onChangeText={onChangeText}
          onEndEditing={onEndEditing}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          autoCorrect={autoCorrect}
          selectionColor={Colors.blue}
          placeholderTextColor={Colors.white}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    fontSize: 14,
    flex: 1,
    paddingLeft: 20,
    marginHorizontal: 20,
    color: Colors.white,
  },
  textFieldView: {
    height: Constants.CONFIG.HEADER_HEIGHT * 0.06,
    width: Constants.CONFIG.SCREEN_WIDTH * 0.85,
    borderRadius: 10,
    marginTop: 5,
    marginBottom: 10,
    borderColor: Colors.black2,
    borderWidth: 1,
    justifyContent: 'center',
    backgroundColor: Colors.fieldBackgroud,
  },
  inlineImg: {
    position: 'absolute',
    zIndex: 99,
    width: 20,
    height: 20,
    left: 10,
    top: 9,
  },
  errorText: {
    fontSize: 12,
    color: Colors.red,
    marginBottom: -5,
    marginHorizontal: 20,
  },
});

export default EmailTextField;
