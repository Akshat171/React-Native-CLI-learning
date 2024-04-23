/* eslint-disable prettier/prettier */
/* eslint-disable semi */
import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import {setupPlayer, addTrack} from './musicPlayerServices';

export default function AppSix() {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  async function setup() {
    let isSetup = await setupPlayer();
  }
  useEffect(() => {}, []);
  return (
    <View>
      <Text>AppSix</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
