import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import Images from '../../Config/Images';

export default class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.LOGO} style={styles.image} />
        <Text style={styles.text}>GooWia Solutions</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 140,
    height: 140,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    marginTop: 20,
  },
});
