import React, {Component} from 'react';
import {
    Text, View, StyleSheetistry, TouchableOpacity, TouchableHighlight
} from 'react-native';

export default class Caculator extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <View style={styles.container}>
                <View style = {styles.display}>

                </View>
                <View style= {styles.input}>
                    
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex : 1
    },
    display : {
        flex: 2,
        bacgroundColor: '#cccccc'
    }, 
    input : {

    }
});