import React, {Component} from 'react';
import {
AppRegistry, Text, View, StyleSheet, Image
} from 'react-native';

class DemoState extends Component {

	render(){
		return(
			<View style={Style.container}>
				{/* <Text ellipsizeMode={"head"} numberOfLines={1}>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
				eeeeeeeeeeeeeeeeeeeeeeeee</Text> */}
				{/* <View style={Style.childBlue}></View>
				<View style={Style.childGreen}></View>
				<View style={Style.childRed}></View> */}
		 <Image
          source={{uri:'http://qnimate.com/wp-content/uploads/2014/03/images2.jpg'}}
		  resizeMode= {'stretch'}
		  style = {Style.text}
		/>
			</View>
			
		);
	}
}

var Style= StyleSheet.create({
	container: {
		flex: 1,
	},
	childBlue: {
		width: 100,
		height: 100,
		backgroundColor: "aqua"
	},
	childRed: {
		width: 100,
		height: 100,
		backgroundColor: "red"
	},
	childGreen: {
		width: 100,
		height: 100,
		backgroundColor: "green"
	}, 
	text:{
		flex:1,
		width: null,
		height: null
	}
});

AppRegistry.registerComponent('HelloWorld', ()=> DemoState);

