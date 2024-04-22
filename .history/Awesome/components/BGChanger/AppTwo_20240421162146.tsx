/* eslint-disable prettier/prettier */
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function AppTwo() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container]}></View>
      <Text>AppTwo</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
