import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import FavoriteSongComponent from '../Components/FavoriteSongComponent';
import FavoriteVideoComponent from '../Components/FavoriteVideoComponent';
class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Music App</Text>
        {/* <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={'Nhập tên bài hát tại đây...'}
          />
          <TouchableOpacity style={styles.searchBtn}>
            <Icon name="ios-search" size={20} color="#000" />
          </TouchableOpacity>
        </View> */}
        <ScrollView>
          <Text style={styles.title}>Favorite Song</Text>
          <FavoriteSongComponent navigation={this.props.navigation} />
          <Text style={styles.title}>Favorite Video</Text>
          <FavoriteVideoComponent navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

export default Discover;

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
  input: {
    width: '100%',
    height: 40,
    padding: 10,
    color: '#000',
    borderRadius: 20,
    borderWidth: 0.5,
    borderColor: 'gray',
    marginLeft: 5,
    fontSize: 15,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 15,
  },
  searchBtn: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 30,
  },
});
