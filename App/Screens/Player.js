import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import PlayerComponent from '../Components/PlayerComponent';

const Player = navigation => {
  const item = navigation.getParam(item);
  return (
    <View style={styles.container}>
      <PlayerComponent item={item} />
    </View>
  );
};
export default Player;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
