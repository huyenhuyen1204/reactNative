
import React, {Component} from 'react';
import {
    Text, View, AppRegistry
} from 'react-native';


export default class Demo extends Component {
    render(){
        return (
            <View onPress={()=> alert("ok")}>
                <ManHinhXanh />
                {/* <Text>abc</Text> */}
            </View>
        );
    }
}


class ManHinhDo extends Component {
   render(){
       return (
           <View style={{flex:1, backgroundColor: 'red', width: 100, height: 100}}>
           </View>
       );
   }
}

class ManHinhXanh extends Component {
    render(){
        return(
            <View style={{flex : 1, backgroundColor : 'green'}}>
                
            </View>
        );
    }
}

// AppRegistry.registerComponent('HelloWorld', ()=> Demo)