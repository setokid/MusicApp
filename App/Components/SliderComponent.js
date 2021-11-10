import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import TrackPlayer, {useProgress} from 'react-native-track-player';
import {Slider} from 'react-native-elements';

const formatTime = secs => {
  let minutes = Math.floor(secs / 60);
  let seconds = Math.floor(secs - minutes * 60);
  if (seconds < 10) seconds = `0${seconds}`;
  return `${minutes}:${seconds}`;
};

function SliderComponent() {
  const {position, duration} = useProgress();
  return (
    <View>
      <Slider
        value={position}
        minimumValue={0.0}
        maximumValue={duration}
        thumbStyle={{backgroundColor: '#ff5b77', height: 12, width: 12}}
        thumbTintColor="red"
        maximumTrackTintColor="#e5e5e5"
        minimumTrackTintColor="#ff5b77"
        trackStyle={{backgroundColor: 'red', height: 1}}
      />
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(position)}</Text>
        <Text style={styles.timer}>{formatTime(duration)}</Text>
      </View>
    </View>
  );
}

export default SliderComponent;

const styles = StyleSheet.create({
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timer: {
    marginTop: -12,
    marginBottom: 5,
  },
});
