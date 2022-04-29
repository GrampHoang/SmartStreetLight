import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatD from '../screens/StatDaily.js';
import StatM from '../screens/StatMonthly.js';
import StatW from '../screens/StatWeekly.js';

const Tab = createBottomTabNavigator();

const StatFooter = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="StatD" component={StatD} />
      <Tab.Screen name="StatW" component={StatW} />
      <Tab.Screen name="StatM" component={StatM} />
    </Tab.Navigator>
  )
}


export default StatFooter;

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
