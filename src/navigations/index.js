import {NavigationContainer} from '@react-navigation/native';
import React, {useContext} from 'react';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import {GlobalContext} from '../context/Provider';

export default function AppNavContainer() {
  const {
    authState: {
      authInitialState: {isLoggedIn},
    },
  } = useContext(GlobalContext);
  console.log('state', isLoggedIn);
  //const isLoggedIn = false;
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
