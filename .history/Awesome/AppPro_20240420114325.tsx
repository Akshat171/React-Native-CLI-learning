/* eslint-disable prettier/prettier */
import React from 'react';
import {Text, View, StyleSheet, useColorScheme} from 'react-native';
function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.darkText}>
        Hello world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});
export default AppPro;
