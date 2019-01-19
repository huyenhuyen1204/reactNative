// Buoc 1: impoer thu vieb
import React, {Component} from 'react';
import {
  AppRegistry, View, Text
} from 'react-native';

export default class HelloWorld extends Component<{}> {
  render(){
    return(
      <View>
        <Text>Hello Huyen vs En</Text>
      </View>
   );
  }
}

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);