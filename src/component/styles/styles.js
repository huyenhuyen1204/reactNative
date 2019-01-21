import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch'
    },
    img : {
       width: 220,
       height: 220,
       resizeMode: 'contain'
    //    height:'50%'
    },
    text : {
        color: 'white',
    }, 
    form : {
        backgroundColor: '#rgba(154, 169, 191, 0.3)',
        fontStyle: 'italic',
        color: 'white'
    }
})

export default styles;