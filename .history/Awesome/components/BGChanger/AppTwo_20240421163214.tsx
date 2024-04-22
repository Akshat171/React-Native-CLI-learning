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
  const [randomBackground, setRandomBackground] = React.useState('#ffffff');

  const generateColor = () => {
    const hexrange = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += hexrange[Math.floor(Math.random() * 16)];
    }

    setRandomBackground(color);
  };
  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity>
          <View style={styles.actionBtn}>
            <Text style={styles.actionBtnText}>Press me</Text>
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
    backgroundColor: '#6A1B40',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionBtnText: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },
});
