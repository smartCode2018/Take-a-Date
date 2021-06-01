import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from '../screens/authScreens/Welcome';
import LoginScreen from '../screens/authScreens/Login';
import RegisterScreen from '../screens/authScreens/Register';
import {LOGIN, REGISTER, WELCOME} from '../constants/routeName';

const AuthStack = createStackNavigator();

export default function AuthNavigator() {
  return (
    <AuthStack.Navigator
      initialRouteName={WELCOME}
      screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={WELCOME} component={WelcomeScreen} />
      <AuthStack.Screen name={LOGIN} component={LoginScreen} />
      <AuthStack.Screen name={REGISTER} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
