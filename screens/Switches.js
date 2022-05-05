import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React, {useState} from 'react';
import { Dimensions } from "react-native";

var pwidth = Dimensions.get('window').width; //full width


export default function Swtiches({navigation}) {

  const [isEnabled1, set1IsEnabled] = useState(false);
  const [isEnabled2, set2IsEnabled] = useState(false);
  const [isEnabled3, set3IsEnabled] = useState(false);

  const toggleSwitch1 = () => set1IsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => set2IsEnabled(previousState => !previousState);
  const toggleSwitch3 = () => set3IsEnabled(previousState => !previousState);

  return (
  <View style={styles.container}>
    <Header/>
    <View style ={styles.smol_container}>
    <Text style ={styles.title}> Chế độ đèn: </Text>

    <View style ={styles.switch_container}>
        <Text style ={styles.switch_text}> Bình thường: </Text>
          <Switch
          style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled1 ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleSwitch1}
          value={isEnabled1}
        />
      </View>
      
      <View style ={styles.switch_container}>
        <Text style ={styles.switch_text}> Đi Chậm: </Text>
          <Switch
          style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled2 ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleSwitch2}
          value={isEnabled2}
        />
      </View>

      <View style ={styles.switch_container}>
        <Text style ={styles.switch_text}> Dừng: </Text>
          <Switch
          style={{ transform: [{ scaleX: 2 }, { scaleY: 2 }] }}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isEnabled3 ? "#f4f3f4" : "#f4f3f4"}
          onValueChange={toggleSwitch3}
          value={isEnabled3}
        />
      </View>

    </View>
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
        marginTop: 50,
        alignItems: 'center',
  },
    smol_container: {
      marginTop: 10,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      height: 250,
      borderColor: '#000000',
      alignItems: 'center',
      borderWidth: 2,
      width: pwidth*0.95,
  },
    switch_container: {
      width: pwidth*0.55,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },

    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
    switch_text: {
      fontSize: 20,
    },

});
