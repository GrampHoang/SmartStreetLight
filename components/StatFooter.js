import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import StatD from '../screens/StatDaily.js';
import StatM from '../screens/StatMonthly.js';
import StatW from '../screens/StatWeekly.js';

const Tab = createBottomTabNavigator();

const StatFooter = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          height: 45,
          bottom: 10,
          right: 40,
          left: 40,
          borderRadius: 15,
          borderTopWidth: 0.1,
        }
      }}
    >
      <Tab.Screen name="StatD" component={StatD} options={{
        tabBarInactiveTintColor: 'black',
        tabBarLabel: 'StatDay',
        tabBarIcon: ({focused, color}) => {
          return <MaterialCommunityIcons name="calendar-today" size={24} color={color} />;
        },
        tabBarIconStyle: {
          top: 2,
        },
        tabBarLabelStyle: {
          paddingBottom: 1,
        },
      }}/>
      <Tab.Screen name="StatW" component={StatW} options={{
        tabBarInactiveTintColor: 'black',
        tabBarLabel: 'StatWeek',
        tabBarIcon: ({focused, color}) => {
          return <MaterialCommunityIcons name="calendar-week" size={24} color={color} />;
        },
        tabBarIconStyle: {
          top: 2,
        },
        tabBarLabelStyle: {
          paddingBottom: 1,
        },
      }}/>
      <Tab.Screen name="StatM" component={StatM} options={{
        tabBarInactiveTintColor: 'black',
        tabBarLabel: 'StatMonth',
        tabBarIcon: ({focused, color}) => {
          return <MaterialCommunityIcons name="calendar-month" size={24} color={color} />;
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
  item: {
    height: 60,
    padding: 15,
    backgroundColor: '#16B830',
},
});
