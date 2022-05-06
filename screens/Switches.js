import { StyleSheet, Text, View, Button, Switch, ScrollView, TextInput, Alert, TouchableOpacity } from 'react-native';
import Footer from '../components/Footer.js';
import Header from '../components/Header.js';
import React, {useState} from 'react';
import { Dimensions } from "react-native";
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

var pwidth = Dimensions.get('window').width; //full width


export default function Swtiches({navigation}) {

  const [isEnabled1, set1IsEnabled] = useState(false);
  const [isEnabled2, set2IsEnabled] = useState(false);
  const [isEnabled3, set3IsEnabled] = useState(false);

  const toggleSwitch1 = () => set1IsEnabled(previousState => !previousState);
  const toggleSwitch2 = () => set2IsEnabled(previousState => !previousState);
  const toggleSwitch3 = () => set3IsEnabled(previousState => !previousState);

  const [redTime, setRed] = useState("");
  const [yellowTime, setYellow] = useState("");
  const [greenTime, setGreen] = useState("");


  return (
  <ScrollView contentContainerStyle={styles.container}>
    <Header/>
 
    <View style ={styles.timeinput_container}>
      <Text style ={styles.title}> Thời gian đèn: </Text>

      <View style ={styles.time_container}>
        <Text style ={styles.switch_text}>Đỏ: </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(redTime) => setRed(redTime)}
          />
        </View>
      </View>
      <View style ={styles.time_container}>
        <Text style ={styles.switch_text}>Vàng: </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(redTime) => setRed(redTime)}
          />
        </View>
      </View>
      <View style ={styles.time_container}>
        <Text style ={styles.switch_text}>Xanh: </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.TextInput}
            onChangeText={(redTime) => setRed(redTime)}
          />
        </View>
      </View>

      <TouchableOpacity style={styles.send_button} onPress={() =>  Alert.alert("Bạn chắc chứ?")}>
        <Text style={{color:'#FFFFFF'}}>CẬP NHẬT</Text>
      </TouchableOpacity>
    </View>


    <View style ={styles.mode_container}>
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
  </ScrollView>
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
  },
    mode_container: {
      marginTop: 10,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      height: 275,
      borderColor: '#000000',
      alignItems: 'center',
      borderWidth: 2,
      width: pwidth*0.95,
  },
  timeinput_container: {
    marginTop: 10,
      flexDirection: 'column',
      backgroundColor: '#FFFFFF',
      height: 350,
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
    
    time_container: {
      width: pwidth*0.75,
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
    inputView: {
      height: 50,
      width: 150,
      borderWidth: 2,
      alignItems: 'center',
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
      fontSize: 15,
    },
    send_button: {
      width: "30%",
      borderColor: "#000000",
      borderWidth: 2,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      marginBottom: 15,
      backgroundColor: "#367BF5",
      marginRight: "5%",
      alignSelf: 'flex-end',
    },
});
