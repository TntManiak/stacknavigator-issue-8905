import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import ScreenB1 from '../Screens/ScreenB1';
import ScreenB2 from '../Screens/ScreenB2';

const Stack = createStackNavigator();

function StackNavigatorB() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}>

            <Stack.Screen
                name="ScreenB1"
                component={ScreenB1} />

            <Stack.Screen
                name="ScreenB2"
                component={ScreenB2} />

        </Stack.Navigator>
    );
}  

export default StackNavigatorB;