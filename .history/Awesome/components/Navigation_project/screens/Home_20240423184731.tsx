/* eslint-disable prettier/prettier */
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

//navigations
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../Navigation/AppSeven';
import ProductItem from '../components/ProductItem';
import Separator from '../components/Separator';

//data
import {PRODUCTS_LIST} from '../data/constants';

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const Home = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={PRODUCTS_LIST}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',

    padding: 12,
    backgroundColor: '#FFFFFF',
  },
});

export default Home;
