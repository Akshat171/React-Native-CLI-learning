/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return <Text>Hello</Text>;
};

export default function Button() {
  return (
    <View>
      <Text>Button</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
