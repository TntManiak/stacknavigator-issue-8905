import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ScreenB2 extends Component {

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: 21, color: 'darkgrey' }}>You are on ScreenB2!</Text>
                <Text style={{ fontSize: 21, color: 'darkgrey', marginHorizontal: 32, marginVertical: 32, textAlign: 'center' }}>If you press android hardware back button, you will go back to ScreenB1, which is expected behavior.</Text>
                <Text style={{ fontSize: 21, color: 'darkgrey', marginHorizontal: 32, marginVertical: 32, textAlign: 'center' }}>If you press navigation bar back button, you will go back to ScreenA2, which is not expected :(</Text>
            </View>
        );
    }
}

export default ScreenB2;