import React from 'react';
import { Button } from 'react-native';


export class HomeScreen extends React.Component {
    render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
            title="Go to Details"
            onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
                index: 0,
                actions: [
                NavigationActions.navigate({ routeName: 'Details' })
                ],
            }))
            }}
        />
        </View>
    );
    }  
}


export class DetailsScreen extends React.Component {
    render() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        </View>
    );
    }  
}