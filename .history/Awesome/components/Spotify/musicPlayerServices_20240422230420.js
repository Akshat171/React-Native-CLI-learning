import TrackPlayer, {Event} from 'react-native-track-player';

import {playListData} from './constants';

export async function playbackService() {
  TrackPlayer.addEventListener(Event.RemotePause, () => {
    TrackPlayer.pause;
  });
}
