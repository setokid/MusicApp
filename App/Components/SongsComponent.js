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
import {firestore, collection} from '@react-native-firebase/firestore';

function SOngData(props, navigation) {
  const playSong = item => {
    props.navigation.navigate('Player', {item: item});
  };

  const openModal = () => {
    this.setState({
      modalVisible: true,
    });
  };

  const closeModal = () => {
    this.setState({
      modalVisible: false,
    });
  };

  const setFavorite = item => {
    item.favorite = true;
    console.log(item.favorite);
  };

  return (
    <View>
      <Modal
        transparent={true}
        onRequestClose={() => closeModal()}
        visible={false}
        animationType="slide">
        <View style={{height: '100%', backgroundColor: 'rgba(0,0,0,0.4)'}}>
          <View style={styles.modal}>
            <Surface style={styles.surface}>
              <Image source={props.item.img} style={styles.modalImg} />
            </Surface>

            <View style={styles.modalData}>
              <View style={styles.playerContainer}>
                <Text style={styles.title}>{props.item.title}</Text>
                <Text style={styles.subTitle}>{props.item.subTitle}</Text>
                <TouchableOpacity style={styles.btn}>
                  <Icon name="play" size={30} color="#fff" />
                </TouchableOpacity>
              </View>
              <View style={styles.option}>
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => setFavorite(item)}>
                  <Icon name="heart" size={30} color="#ff5b77" />
                  <Text style={styles.text}>Add To Favourite</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableWithoutFeedback
        style={styles.songContainer}
        onPress={() => playSong(props.item)}>
        <View style={{flexDirection: 'row'}}>
          <Image source={props.item.img} style={styles.img} />
          <View style={styles.dataContainer}>
            <Text style={styles.songtitle}>{props.item.title}</Text>
            <Text style={styles.subTitle}>{props.item.subTitle}</Text>
            <Text style={styles.subTitle}>{props.item.duration / 60}</Text>
          </View>
          <View style={styles.iconContainer}>
            <TouchableOpacity onPress={() => openModal()}>
              <Icon name="dots-vertical" color="gray" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const SongsComponent = () => {
  const [songs] = useState([
    {
      title: 'Believer',
      subTitle: 'Imagine Dragons',
      duration: 201.6,
      img: require('../Assets/s1.jpg'),
      favorite: true,
      video: 'https://vjs.zencdn.net/v/oceans.mp4',
    },
    {
      title: 'Hall Of Fame',
      subTitle: 'The Script',
      duration: 201.6,
      img: require('../Assets/s2.jpg'),
      favorite: true,
    },
    {
      title: "It's My Life",
      subTitle: 'Dr. Alban',
      duration: 201.6,
      img: require('../Assets/s3.jpg'),
      favorite: true,
    },
    {
      title: 'Not Afraid',
      subTitle: 'Eminem',
      duration: 201.6,
      img: require('../Assets/s4.jpg'),
      favorite: true,
    },
    {
      title: 'I Will Survive',
      subTitle: 'Gloria Gaynor',
      duration: 201.6,
      img: require('../Assets/s5.jpeg'),
    },
  ]);
  const separator = () => {
    return <View style={{height: 10, backgroundColor: '#fff'}} />;
  };
  return (
    <View style={styles.container}>
      <View style={{padding: 10, paddingTop: 0}}>
        <FlatList
          data={songs}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => separator()}
          renderItem={({item, index}) => {
            return <SOngData item={item} key={index} />;
          }}
        />
      </View>
    </View>
  );
};

export default SongsComponent;

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
