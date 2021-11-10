import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

class CatalogComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Categories</Text>
      </View>
    );
  }
}

export default CatalogComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    margin: 10,
    marginLeft: 15,
  },
});
