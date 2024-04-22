import TrackPlayer, {Event} from 'react-native-track-player';

import {playListData} from './constants';

export async function setupPlayer() {
  let isSetup = false;
  try {
    await TrackPlayer.getActiveTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
  } finally {
    return isSetup;
  }
}

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause();
  });
  TrackPlayer.addEventListener(Event.RemotePlay, () => {
    TrackPlayer.play();
  });
  TrackPlayer.addEventListener(Event.RemoteNext, () => {
    TrackPlayer.skip();
  });
  TrackPlayer.addEventListener(Event.RemotePrevious, () => {
    TrackPlayer.skipToPrevious();
  });
}
