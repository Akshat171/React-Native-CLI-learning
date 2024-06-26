/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View} from 'react-native';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screens
import Home from './screens/Home';
import Details from './screens/Details';

//Typescript typechecking
export type RootStackParamList = {
  Home: undefined;
  Details: {productId: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const AppSeven = () => {
  return (
    <View>
      <Text>AppSeven</Text>
    </View>
  );
};

export default AppSeven;
