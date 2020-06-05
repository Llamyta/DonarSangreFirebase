import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class MyComponent extends Component {
  constructor(props) {
    console.log(props.text);
    super(props);
  }

  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}
