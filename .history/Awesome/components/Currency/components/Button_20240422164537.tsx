/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text>{props.flag}</Text>
    </View>
  );
};

export default function Button() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
});
