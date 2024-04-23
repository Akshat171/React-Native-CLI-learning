/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

export default function AppEight() {
  return (
    <NavigationContainer>
      <Text>AppEight</Text>
    </NavigationContainer>
  );
}
