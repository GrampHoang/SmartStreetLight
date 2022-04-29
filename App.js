import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Footer from './components/Footer.js';
import StatFooter from './components/StatFooter.js';
import LoginScreen from './screens/Login.js';
import HomeScreen from './screens/HomeScreen.js';
import DetailScreen from './screens/DetailScreen.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Swtiches from './screens/Switches.js';
import StatD from './screens/StatDaily.js';
import StatW from './screens/StatWeekly.js';
import StatM from './screens/StatMonthly.js';


const Stack = createNativeStackNavigator();

const Foot = () => {
  return(
    <NavigationContainer independent={true} screenOptions={{headerShown: false}}>
      <Footer/>
    </NavigationContainer>
)
}

const StatFoot = () => {
  return(
    <NavigationContainer independent={true} screenOptions={{headerShown: false}}>
      <StatFooter/>
    </NavigationContainer>
)
}

const Combine = () => {
  return(
    <NavigationContainer independent={true} screenOptions={{headerShown: false}}>
      <Stack.Navigator 
      initialRouteName="F"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="F" component={Foot}/>
      <Stack.Screen name="SF" component={StatFoot} />
    </Stack.Navigator>
    </NavigationContainer>
)
}

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Combine" component={Combine} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
