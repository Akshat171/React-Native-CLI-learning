/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import DiceOne from '../../assets/One.png';
import DiceTwo from '../../assets/Two.png';
import DiceThree from '../../assets/Three.png';
import DiceFour from '../../assets/Four.png';
import DiceFive from '../../assets/Five.png';
import DiceSix from '../../assets/Six.png';

export default function AppThree() {
  return (
    <View>
      <Text>AppThree</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
