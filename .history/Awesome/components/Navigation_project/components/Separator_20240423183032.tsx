/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return <View style={StyleSheet.separator}></View>;
};

const style = StyleSheet.create({
  separator: {
    height: 0.8,
    backgroundColor: '#CAD5E2',
  },
});

export default Separator;
