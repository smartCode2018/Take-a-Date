import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigator from './HomeNavigator';
import {HOME_NAVIGATOR} from '../constants/routeName';

const TabStack = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <TabStack.Navigator>
      <TabStack.Screen name={HOME_NAVIGATOR} component={HomeNavigator} />
    </TabStack.Navigator>
  );
}
