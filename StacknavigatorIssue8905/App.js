/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import StackNavigatorA from './src/Navigators/StackNavigatorA';

function App() {
  return (
    <NavigationContainer>
      <StackNavigatorA />
    </NavigationContainer>
  );
}

export default App;

