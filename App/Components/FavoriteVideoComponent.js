import React, {Component, useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  Modal,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const {width, height} = Dimensions.get('window');
import {Surface} from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

class VIdeoData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  playSong = item => {
    this.props.navigation.navigate('Player', {item: item});
  };

  openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  setFavorite = item => {
    firestore().collection('Videos').doc(item.id).update({
      favorite: false,
    });
    this.closeModal();
  };

  render() {
    let item = this.props.item;
    return (
      <View>
        <Modal
          transparent={true}
          onRequestClose={() => this.closeModal()}
          visible={this.state.modalVisible}
          animationType="slide">
          <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
            <View style={styles.modal}>
              <Surface style={styles.surface}>
                <Image source={{uri: item.img}} style={styles.modalImg} />
              </Surface>

              <View style={styles.modalData}>
                <View style={styles.playerContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.subTitle}>{item.singer}</Text>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => this.playSong(item)}>
                    <Icon name="play" size={30} color="#fff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.option}>
                  <TouchableOpacity
                    style={styles.option}
                    onPress={() => this.setFavorite(item)}>
                    <Icon name="heart" size={30} color="#ff5b77" />
                    <Text style={styles.text}>Remove Favourite</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </Modal>

        <TouchableWithoutFeedback
          style={styles.songContainer}
          onPress={() => this.playSong(item)}>
          <View style={{flexDirection: 'row'}}>
            <Image source={{uri: item.img}} style={styles.img} />
            <View style={styles.dataContainer}>
              <Text style={styles.songtitle}>{item.title}</Text>
              <Text style={styles.subTitle}>{item.singer}</Text>
              {/* <Text style={styles.subTitle}>{item.duration / 60}</Text> */}
            </View>
            <View style={styles.iconContainer}>
              <TouchableOpacity onPress={() => this.openModal()}>
                <Icon name="dots-vertical" color="gray" size={30} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songList: [],
    };
  }

  componentDidMount() {
    this.songdata = firestore()
      .collection('Videos')
      .where('favorite', '==', true)
      .onSnapshot(docs => {
        let songList = [];
        docs.forEach(doc => {
          songList.push(doc.data());
        });
        this.setState({songList});
        console.log(songList);
      });
  }

  separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{padding: 10, paddingTop: 0}}>
          <FlatList
            data={this.state.songList}
            showsVerticalScrollIndicator={false}
            ItemSeparatorComponent={() => this.separator()}
            renderItem={({item, index}) => {
              return (
                <VIdeoData item={item} navigation={this.props.navigation} />
              );
            }}
          />
        </View>
      </View>
    );
  }
}

export default VideoComponent;

const styles = StyleSheet.create({
  container: {
    width: width,
  },
  songContainer: {
    width: width,
    height: 70,
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 5,
  },
  dataContainer: {
    paddingLeft: 10,
    width: width - 160,
  },
  songtitle: {
    fontSize: 18,
    color: '#000',
  },
  subTitle: {
    fontSize: 16,
    color: 'gray',
  },
  iconContainer: {
    flexDirection: 'row',
    marginLeft: 40,
    alignItems: 'center',
  },
  modal: {
    height: '55%',
    width: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderTopColor: '#e5e5e5',
  },
  modalImg: {
    height: 180,
    width: 180,
  },
  surface: {
    height: 180,
    width: 180,
    alignSelf: 'center',
    position: 'absolute',
    overflow: 'hidden',
    top: -100,
    borderRadius: 20,
    elevation: 20,
  },
  modalData: {
    marginTop: 100,
  },
  option: {
    height: 50,
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    borderBottomColor: '#e5e5e5',
  },
  text: {
    marginLeft: 15,
    color: '#000',
    fontSize: 20,
  },
  playerContainer: {
    width: '100%',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
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
});
