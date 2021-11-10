import React, {Component} from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import BannerComponent from '../Components/BannerComponent';
import CatalogComponent from '../Components/CatalogComponent';
import SongsComponent from '../Components/SongsComponent';

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
          <BannerComponent navigation={this.props.navigation} />
          {/* <CatalogComponent navigation={this.props.navigation} /> */}
          <Text style={styles.title}>Songs</Text>
          <SongsComponent />
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
