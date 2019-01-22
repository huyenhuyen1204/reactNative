
import React, {Component} from 'react';
import {
    Text, View, AppRegistry, Navigator
} from 'react-native';

// import Navigator from 'react-native-deprecated-custom-components';

export default class Demo extends Component {
    render(){
        return (
            <Navigator initialRoute={{name: 'ManHinhDo', component: ManHinhDo}}
                renderScene ={(route, navigator)=>      {
                    if(route.component){
                        return React.createElement(route.component, {navigator, passProps: route.props})
                    }
                }}
            />
            
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