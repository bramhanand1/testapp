import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SScreen from './SScreen';
import FScreen from './FScreen';
import StopwatchScreen from './Stopwatch';

const Stack = createStackNavigator();

const App1 = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Logo" component={FScreen} />
        <Stack.Screen name="Login" component={SScreen} />
        <Stack.Screen name="Stopwatch" component={StopwatchScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App1;
