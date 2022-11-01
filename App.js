/**

 * @format
 * @flow strict-local
 */

import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import Devices from './src/screens/Devices';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Devices" component={Devices} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
