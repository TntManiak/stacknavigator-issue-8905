import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class ScreenA1 extends Component {

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{ fontSize: 21, color: 'darkgrey', marginVertical: 32 }}>You are on ScreenA1!</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenA2')} style={{ backgroundColor: 'grey', height: 64, width: '70%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 5 }}>
                    <Text style={{ fontSize: 21, color: 'white' }}>Go to ScreenA2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ScreenA1;