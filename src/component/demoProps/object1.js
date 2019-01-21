import React, {Component} from 'react';
import {
    Text, View, StyleSheet
} from 'react-native';

export default class Customer extends Component {
    render(){
        return (
            <View styles = {styles.ovuong}>
                <Text>{this.props.hovaten}</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    ovuong : {
        width: 200,
        height: 200,
        backgroundColor: "green"
    }
})