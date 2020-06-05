import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';

const ButtonIcon = ({onPressButton, imageSrc}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPressButton}>
      <Image style={styles.image} source={imageSrc} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  image: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch'
  }
});

export default ButtonIcon;
