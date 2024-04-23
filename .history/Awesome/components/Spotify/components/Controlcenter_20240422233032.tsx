/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../musicPlayerServices';

export default function Controlcenter() {
  const playbackState = usePlaybackState();
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };

  return (
    <View>
      <Text>Controlcenter</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
