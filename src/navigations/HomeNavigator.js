import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import {HOME} from '../constants/routeName';

const HomeStack = createStackNavigator();

export default function HomeNavigator() {
  return (
    <HomeStack.Navigator initialRouteName={HOME}>
      <HomeStack.Screen name={HOME} component={HomeScreen} />
    </HomeStack.Navigator>
  );
}
