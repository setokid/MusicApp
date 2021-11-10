import React, {Component, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Surface} from 'react-native-paper';
import {Slider} from 'react-native-elements';
import TrackPlayer, {Event, usePlaybackState} from 'react-native-track-player';
import SliderComponent from './SliderComponent';

const {width, height} = Dimensions.get('screen');

class PlayerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0.0,
      maxValue: 0.0,
      isPlaying: false,
    };
  }

  componentDidMount() {
    var track = {
      url: this.props.item.src,
      title: this.props.item.title,
      artist: this.props.item.singer,
      artwork: this.props.item.img,
      duration: this.props.item.duration,
    };
    TrackPlayer.setupPlayer().then(async () => {
      console.log('Player Ready');
      await TrackPlayer.reset();
      await TrackPlayer.add(track);
    });
  }

  componentWillUnmount() {
    TrackPlayer.pause();
  }

  playAgain = () => {
    var track = {
      url: this.props.item.src,
      title: this.props.item.title,
      artist: this.props.item.singer,
      artwork: this.props.item.img,
      duration: this.props.item.duration,
    };
    TrackPlayer.reset();
    TrackPlayer.add(track);
    TrackPlayer.play();
  };
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View style={{height: height + 60}}>
            <Surface style={styles.surface}>
              <Image source={{uri: this.props.item.img}} style={styles.img} />
            </Surface>
            <View style={styles.dataContainer}>
              <Text style={styles.title}>{this.props.item.title}</Text>
              <Text style={styles.singer}>{this.props.item.singer}</Text>
              <TouchableOpacity style={styles.btn} activeOpacity={0.5}>
                <Icon
                  name="play"
                  size={30}
                  color="#fff"
                  onPress={() => TrackPlayer.play()}
                />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
        <View style={styles.main}>
          <SliderComponent />
          <View style={styles.actions}>
            <Icon name="shuffle-variant" size={35} color="#000" />
            <Icon name="skip-backward" size={35} color="#000" />
            <TouchableOpacity>
              <Icon
                name="pause"
                size={35}
                color="#000"
                onPress={() => TrackPlayer.pause()}
              />
            </TouchableOpacity>

            <Icon name="skip-forward" size={35} color="#000" />
            <TouchableOpacity onPress={() => this.playAgain()}>
              <Icon name="sync" size={35} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default PlayerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  surface: {
    height: 200,
    width: 200,
    borderRadius: 10,
    elevation: 15,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: 20,
  },
  img: {
    height: 200,
    width: 200,
  },
  dataContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    color: 'gray',
  },
  btn: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: '#ff5b77',
    elevation: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actions: {
    width: '100%',
    height: 60,
    padding: 10,
    paddingTop: 0,
    // borderTopWidth: 0.5,
    // borderTopColor: 'gray',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  main: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 18,
    color: '#333333',
    margin: 10,
  },
});
