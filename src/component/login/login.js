import React, {Component} from 'react';
import styles from '../styles/styles'
import {
 Image, View, ImageBackground, TextInput, Text
} from 'react-native';

export default class DemoPokemon extends Component {
    render(){
        return(
            <ImageBackground style={styles.container} source={{uri: 'http://i.imgur.com/No3g451.png'}}>
                <View>
                    <Image 
                        source={{uri:'https://res.cloudinary.com/teepublic/image/private/s--CQQWAqOp--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_36538b,e_outline:48/co_36538b,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1468869573/production/designs/589254_1.jpg'}}
                    
                        style={styles.img}
                    />
                    <View>
                        <View>
                            <Text style={styles.text}>Register</Text>
                            <TextInput style={styles.form} placeholder="username" />
                            <TextInput style={styles.form} placeholder="password" />
                            <Text style = {styles.text}>Login</Text>
                        </View>
                        <View></View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}