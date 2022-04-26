import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DetailScreen from '../screens/DetailScreen.js'
import HomeScreen from '../screens/HomeScreen.js'

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Detail" component={DetailScreen} />
    </Tab.Navigator>
  )
}


export default Footer;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: '#16B830',
},
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
},
});
