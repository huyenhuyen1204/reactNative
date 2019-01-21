import React, {Component} from 'react';
import {
    Text, View, StyleSheet, AppRegistry, TouchableOpacity, TouchableHighlight
} from 'react-native';

export default class Demo extends Component {
     click() {
        alert("func click");
    }
    render(){
        return (
            <View>
                <TouchableOpacity onPress={()=>alert("You click me")}>
                <View style = {styles.button1}>
                    {/* <Text >Hello</Text> */}
                </View>
                </TouchableOpacity>
                <TouchableHighlight onPress={this.click.bind(this)}>
                    <Text style = {styles.button2}>Hello</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    ovuong : {
        width: 200,
        height: 200,
        backgroundColor: "green"
    }, 
    button1 : {
        backgroundColor :'green',
        width : 100,
        height : 30,
        marginTop : 100,
        marginLeft : 50,

    },
    button2 : {
        backgroundColor :'green',
        width : 100,
        height : 30,
        marginTop : 100,
        marginLeft : 50,

    }
})

AppRegistry.registerComponent('HelloWorld', ()=> Demo)