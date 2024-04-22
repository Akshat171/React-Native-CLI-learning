/* eslint-disable prettier/prettier */
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

export default function AppTwo() {
  return (
    <>
      <StatusBar backgroundColor={'#000000'} />
      <View style={[styles.container]}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text>Press me</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text>AppTwo</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    backgroundColor: '',
  },
});
