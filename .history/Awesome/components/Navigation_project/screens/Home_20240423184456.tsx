/* eslint-disable prettier/prettier */
import React from 'react';
import {View} from 'react-native';

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/AppSeven';
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

//data
import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = () => {
  return <View>Home</View>;
};

export default Home;