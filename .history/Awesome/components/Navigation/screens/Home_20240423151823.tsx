/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

//navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../AppSeven';

//first from where we are bringing in and second what we are bringing in
type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
export default function Home() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
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
