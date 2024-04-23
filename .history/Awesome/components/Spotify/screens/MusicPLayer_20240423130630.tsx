/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

const {width} = Dimensions.get('window');
const MusicPLayer = () => {
  return <View>MusicPLayer</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#001d23',
  },
  listArtWrapper: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  albumContainer: {
    width: 300,
    height: 300,
  },
  albumArtImg: {
    height: '100%',
    borderRadius: 4,
  },
});

export default MusicPLayer;
