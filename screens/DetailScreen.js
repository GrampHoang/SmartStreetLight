

// DetailScreen là nơi hiện stat của đèn, trong đó có 1 button ở cuối chuyển sang OptionScreen để bật/tắt và điều chỉnh đèn
// OptionScreen có lẽ nên làm cuối, trước mắt cứ làm mấy cái này đã 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React from 'react';

export default function DetailScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Text> Homescreen </Text>
        <Button 
          title = "Về Homescreen"
          color = "blue"
          onPress={() => navigation.navigate("HomeScreen")}
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
