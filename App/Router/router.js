import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../Screens/Home';
import Favorite from '../Screens/Favorite';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarInactiveTintColor: 'gray',
        tabBarActiveTintColor: '#ff5b77',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 60,
          paddingBottom: 12,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon
              name={focused ? 'home' : 'home-outline'}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarIcon: ({focused, color}) => (
            <Icon name={focused ? 'music' : 'music'} size={28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
