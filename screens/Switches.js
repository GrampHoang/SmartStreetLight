import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React from 'react';

export default function Swtiches({navigation}) {
  return (
    <View style={styles.container}>
        <Text> Swtiches </Text>
        <Button 
          title = "Tới 1 cái đèn"
          color = "red"
          onPress={() => navigation.navigate("DetailScreen")}
        />
    </View>
  );
}

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
