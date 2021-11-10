import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import SongsListComponent from '../Components/SongsListComponent';
import VideoListComponent from '../Components/VideosListComponent';

console.reportErrorsAsExceptions = false;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Music App</Text>
        <ScrollView>
          <Text style={styles.title}>Songs</Text>
          <SongsListComponent navigation={this.props.navigation} />
          <Text style={styles.title}>Videos</Text>
          <VideoListComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
