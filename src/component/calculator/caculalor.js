import React, {Component} from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Image, TouchableHighlight
} from 'react-native';

export default class Caculator extends Component {
    constructor(props){
        super(props);

    this.state = {
        preInput : '',
        nextInput : 0,
        operator : null
    }
    }

    render(){
        return (
            <View style={styles.container}>
                <View style = {styles.display}>
                    <View style= {styles.screen}>

                    </View>
                </View>
                <View style= {styles.inputBackGround}>
                <View style = {styles.row}>
                <TouchableHighlight >
                    <Image          
                        source = {require('../../img/7.png')}
                        style={styles.input}
                    />
                </TouchableHighlight>
             {/* <TouchableOpacity>
                    <Image 
                        source = {require('../../img/8.png')}
                        style={styles.input}
                    />
            </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/9.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/chia.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                </View>
                
                <View style = {styles.row}>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/4.png')}
                        style={styles.input}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/5.png')}
                        style={styles.input}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/6.png')}
                        style={styles.input}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/nhan.png')}
                        style={styles.input}
                    />
                </TouchableOpacity>
                </View>
                <View style = {styles.row}>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/1.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/2.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/3.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/tru.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                </View>
                <View style = {styles.row}>
                <TouchableOpacity>
                    <Image 
                        source = {require('../../img/0.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/cham.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/bang.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Image 
                        source = {require('../../img/cong.png')}
                        style={styles.input}
                    />
                    </TouchableOpacity> */}
                </View>
                </View>
            </View>
        );
    }
}
_onpress(value){
    switch(value){
        
    }
}
var styles = StyleSheet.create({
    container: {
        flex : 1,
        margin: 10
    },
    display : {
        flex: 1,
     backgroundColor: '#CDD5D7'
    }, 
    input : {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'contain'
    },
    inputBackGround : {
        flex: 2,
        backgroundColor : '#CDD5D7'
    },

    row : {
        flex: 1,
        flexDirection: 'row'
    },
    screen : {
        flex: 1,
        width: null,
        height: null,
        margin : 10,
        backgroundColor: '#cccccc'
    }
});