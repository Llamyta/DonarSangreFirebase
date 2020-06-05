/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import Logo from './src/login/logo';

import Input from './src/login/input';
import imgPassword from './src/assets/pass.png';
import imgUsername from './src/assets/username.png';
import Constants from './src/login/constants';
import Button from './src/login/Button';

const PASS = '123';
const USER = 'user1';

const App: () => React$Node = () => {
  return (
    <View style={styles.body}>
      <View style={styles.container}>
        <Logo style={styles.box}></Logo>
        <Input
          source={imgUsername}
          placeholder={Constants.USERNAME}
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={USER => this.setState({USER})}
        />
        <Input
          source={imgPassword}
          placeholder={Constants.PASS}
          secureTextEntry={true}
          autoCorrect={false}
          onChangeText={PASS => this.setState({PASS})}
        />
        <Button pass={USER} username={PASS}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#1292B4',
  },
  container: {
    flex: .5,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    height: 100,

  },
});

export default App;
