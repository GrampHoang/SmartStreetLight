import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Swtiches from '../screens/Switches.js';
import StatFooter from './StatFooter.js';

const Tab = createBottomTabNavigator();

const Footer = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 52,
          paddingBottom: 2,
        }
      }}
    >
      <Tab.Screen name="Stat" component={StatFooter} options={{
        tabBarInactiveTintColor: '#748c94',
        tabBarActiveTintColor: '#e32f45',
        tabBarLabel: 'Statistic',
        tabBarIcon: ({focused, color}) => {
          return <Ionicons name="stats-chart-outline" size={28} color={color} />;
        },
        tabBarIconStyle: {
          top: 2,
        },
        tabBarLabelStyle: {
          paddingBottom: 1,
        },
      }}/>
      <Tab.Screen name="Switches" component={Swtiches} options={{
        tabBarInactiveTintColor: '#748c94',
        tabBarActiveTintColor: '#e32f45',
        tabBarLabel: 'Switches',
        tabBarIcon: ({focused, color}) => {
          return <AntDesign name="switcher" size={28} color={color} />;
        },
        tabBarIconStyle: {
          top: 2,
        },
        tabBarLabelStyle: {
          paddingBottom: 1,
        },
      }}/>
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
