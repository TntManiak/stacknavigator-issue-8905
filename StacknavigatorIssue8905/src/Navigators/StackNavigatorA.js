import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import ScreenA1 from "../Screens/ScreenA1";
import ScreenA2 from '../Screens/ScreenA2';
import StackNavigatorB from './StackNavigatorB';

const Stack = createStackNavigator();

function StackNavigatorA() {
    return (
        <Stack.Navigator
            screenOptions={{
                ...TransitionPresets.SlideFromRightIOS
            }}>

            <Stack.Screen
                name="ScreenA1"
                component={ScreenA1} />

            <Stack.Screen
                name="ScreenA2"
                component={ScreenA2} />

            <Stack.Screen
                name="StackNavigatorB"
                component={StackNavigatorB} />

        </Stack.Navigator>
    );
}

export default StackNavigatorA;