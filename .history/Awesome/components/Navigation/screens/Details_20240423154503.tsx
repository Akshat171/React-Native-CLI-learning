/* eslint-disable prettier/prettier */
import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppSeven';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

//first from where we are bringing in and second what we are bringing in
type DetailsProps = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function Details({route}: DetailsProps) {
  const {productId} = route.params;
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text>Details:{productId}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go to Home" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
  },
});
