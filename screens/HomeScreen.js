import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React from 'react';

// HomeScreen sẽ có 1 cái bản đò dạng static image, trong đó có 1-2 coponent đại điện cho cái đèn đỏ
// click vào đó sẽ dẫn tới DetailScreen của đèn đỏ tương ứng.

// Cơ mà mình có lẽ nên làm 1 cái list đèn đỏ để click vào thôi cũng được

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text> Homescreen </Text>
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
