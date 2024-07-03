import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator Options={{headerShown:false}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen name="SignupScreen" component={SignupScreen} 
        options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;
