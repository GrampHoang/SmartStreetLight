import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatD from '../screens/StatDaily.js';
import Swtiches from '../screens/Switches.js';
import StatFooter from './StatFooter.js';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions={"Home"}
      screenOptions={{headerShown: false}}
    >
      <Tab.Screen name="Stat" component={StatFooter} />
      <Tab.Screen name="Switches" component={Swtiches} />
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
