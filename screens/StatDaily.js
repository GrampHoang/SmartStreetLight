import { StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import StatGeneral from './StatGeneral';

var pwidth = Dimensions.get('window').width; //full width

export default function StatD() {
  const [currentDate, setCurrentDate] = useState('');
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    setCurrentDate(
      date + '/' + month + '/' + year
    );
  }, []);

  return (
    <View> 
      <Header />
      <StatGeneral />
      <ScrollView>
        <View style={styles.container}>
            <View style={styles.container_sub}>
              <Text style={styles.HeaderStat}> Biểu đồ ngày {currentDate} </Text>
            </View>
        </View>
      </ScrollView>
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
        marginTop: 8,
    },
    container_sub: {
      margin: 6,
      borderWidth: 2,
      width: pwidth - 12,
      height: pwidth,
    },
    HeaderStat: {
      fontSize: 18,
      margin: 5,
      marginLeft: 5,
      fontWeight: 'bold'
    },
    ContentStat: {
      marginLeft: 20,
      marginBottom: 5,
    },
});
