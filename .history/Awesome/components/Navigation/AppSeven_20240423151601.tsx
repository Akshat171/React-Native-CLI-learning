/* eslint-disable prettier/prettier */
import React from 'react';

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

//in stack nagvigation what type of data we sending
const Stack = createNativeStackNavigator<RootStackParamList>();

const AppSeven = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Trending products',
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: 'product details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSeven;
