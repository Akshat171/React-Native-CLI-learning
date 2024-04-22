import TrackPlayer, {Event} from 'react-native-track-player';

import {playListData} from './constants';

export async function setupPlayer() {
  try {
    await TrackPlayer.setupPlayer();
  } catch (error) {}
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
