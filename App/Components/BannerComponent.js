import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const {width, height} = Dimensions.get('window');

class BannerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let banners = [
      {
        title: 'Metal City',
        subTitle: 'Dead April',
        img: require('../Assets/b1.jpg'),
      },
      {
        title: 'Return To Forever',
        subTitle: '',
        img: require('../Assets/b2.jpg'),
      },
      {
        title: 'Your Love Remains',
        subTitle: 'The Rock Music',
        img: require('../Assets/b4.jpg'),
      },
    ];
    return (
      <View style={styles.container}>
        <FlatList
          data={banners}
          pagingEnabled={true}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => {
            return (
              <View style={styles.banner}>
                <ImageBackground source={item.img} style={styles.bannerImage}>
                  <TouchableOpacity style={styles.btn}>
                    <Icon name="play" size={18} color="#000" />
                    <Text style={styles.text}>Play Now</Text>
                  </TouchableOpacity>
                </ImageBackground>
              </View>
            );
          }}
        />
      </View>
    );
  }
}

export default BannerComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: 250,
    elevation: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
  banner: {
    height: 250,
    width: width,
  },
  bannerImage: {
    height: 250,
    width: '100%',
  },
  btn: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    flexDirection: 'row',
    height: 24,
  },
  text: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#000',
  },
});
