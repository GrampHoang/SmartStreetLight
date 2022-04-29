

// DetailScreen là nơi hiện stat của đèn, trong đó có 1 button ở cuối chuyển sang OptionScreen để bật/tắt và điều chỉnh đèn
// OptionScreen có lẽ nên làm cuối, trước mắt cứ làm mấy cái này đã 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React from 'react';
import StatFooter from '../components/StatFooter.js'

export default function StatM({navigation}) {
  return (
    <View style={styles.container}>
        <Text> Thống kê hàng tháng</Text>
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
