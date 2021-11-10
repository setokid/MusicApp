import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import VideoPlayer from 'react-native-video-controls';

const {width, height} = Dimensions.get('screen');

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.mainVideoView}>
        <View
          style={{height: height / 3, backgroundColor: 'gray', width: '100%'}}>
          <VideoPlayer
            source={{
              uri: this.props.item.src,
            }}
            style={styles.video}
            controls={true}
            toggleResizeModeOnFullscreen={true}
          />
        </View>
        <Text style={styles.videoTitle}>{this.props.item.title}</Text>
        <Text style={styles.videoArtist}>{this.props.item.singer}</Text>
      </View>
    );
  }
}

export default VideoComponent;

const styles = StyleSheet.create({
  mainVideoView: {
    felx: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#646464',
  },
  videoArtist: {
    fontSize: 16,
    color: '#646464',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});
