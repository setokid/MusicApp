import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './App/Router/router';
import Player from './App/Screens/Player';
import Video from './App/Screens/Video';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  startListening() {
    this.props.navigation.navigate('Tabs');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Text style={styles.title}>Music App</Text>
        <Image source={require('./App/Assets/logo.png')} style={styles.logo} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => this.startListening()}>
          <Text style={styles.text}>Bấm để nghe nhạc nè hihi</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const Stack = createNativeStackNavigator();

function Stacks() {
  return (
    <Stack.Navigator headerShown={false}>
      <Stack.Screen name="App" component={App} options={{headerShown: false}} />
      <Stack.Screen
        name="Tabs"
        component={Tabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Player"
        component={Player}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Video"
        component={Video}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function MainScreen() {
  return (
    <NavigationContainer>
      <Stacks />
    </NavigationContainer>
  );
}

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  logo: {
    height: 220,
    width: '80%',
    marginBottom: 40,
    marginTop: 20,
  },
  btn: {
    width: '60%',
    height: 50,
    borderRadius: 20,
    backgroundColor: '#ff5b77',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    elevation: 15,
  },
  text: {
    color: '#fff',
    fontSize: 20,
  },
});
