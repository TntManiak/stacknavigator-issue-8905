import React, { Component } from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

class ScreenB1 extends Component {

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'}}>
            <Text style={{ fontSize: 21, color: 'darkgrey', marginVertical: 32 }}>You are on ScreenB1!</Text>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('ScreenB2')} style={{ backgroundColor: 'grey', height: 64, width: '70%', justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 5 }}>
                    <Text style={{ fontSize: 21, color: 'white' }}>Go to ScreenB2</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default ScreenB1;