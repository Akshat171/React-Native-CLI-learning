/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
export default AppPro;
