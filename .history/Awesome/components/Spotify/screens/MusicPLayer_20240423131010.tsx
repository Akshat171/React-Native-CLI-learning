/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import TrackPlayer, {
  Event,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {playListData} from '../constants';
import SongInfo from '../components/SongInfo';
import SongSlider from '../components/SongSlider';
import Controlcenter from '../components/Controlcenter';

const {width} = Dimensions.get('window');

const MusicPLayer = () => {
  const [track, setTrack] = useState<Track | null>();

  const renderArtWork = () => {
    return (
      <View style={styles.listArtWrapper}>
        <View style={styles.albumContainer}>
          {track?.artwork && (
            <Image
              style={styles.albumArtImg}
              source={{
                uri: track?.artwork?.toString(),
              }}
            />
          )}
        </View>
      </View>
    );
  };
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
