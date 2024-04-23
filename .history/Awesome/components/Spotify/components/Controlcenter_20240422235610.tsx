/* eslint-disable prettier/prettier */
import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TrackPlayer, {State, usePlaybackState} from 'react-native-track-player';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {playbackService} from '../musicPlayerServices';

export default function Controlcenter() {
  const playbackState = usePlaybackState();
  //next button
  const skipToNext = async () => {
    await TrackPlayer.skipToNext();
  };
  // previous button
  const skipToPrevious = async () => {
    await TrackPlayer.skipToPrevious();
  };

  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getActiveTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={skipToPrevious}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Pressable onPress={() => togglePlayback(playbackState)}>
        <Icon
          style={styles.icon}
          name={playbackState === State.Playing ? 'pause' : 'play'}
          size={40}
        />
      </Pressable>
      <Pressable onPress={skipToNext}>
        <Icon style={styles.icon} name="skip-previous" size={40} />
      </Pressable>
      <Text>Controlcenter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 56,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  playButton: {
    marginHorizontal: 24,
  },
});
