import React, {Component} from 'react';
import {
   Text, View
}from 'react-native';

export default class LoiChao extends Component<{}>{
  render(){
    return(
    <View>
      <Text>Huyen</Text>
      <HienThi></HienThi>
     </View>
      );
  }
}

export class HienThi extends Component<{}> {
	render(){
		<View>
		<Text>ND ben Component HienThi</Text>
		</View>
	}
}


// AppRegistry.registerComponent('HelloWorld', () => LoiChao);