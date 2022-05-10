import { StyleSheet, Text, View, Button, StatusBar } from 'react-native';
import React from 'react';
import StatGeneral from './StatGeneral';
import { ScrollView } from 'react-native-web';
import Footer from '../components/Footer';
import { Dimensions } from "react-native";

var pwidth = Dimensions.get('window').width; //full width

const DetailScreen = () => {
  return (
    <View style={styles.container}>
      <StatGeneral />
      <View style={styles.container_sub}>
          <View style={styles.container2}>

          </View>
      </View>
      <Footer />
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: '#16B830',
        height: 60,
        backgroundColor: "#367BF5",
        width: pwidth,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    container_sub: {
      margin: 6,
      borderWidth: 2,
    },
    container2: {
      margin: 6,
      borderWidth: 2,
      backgroundColor: 'green',
      width: 30,
    },
});
