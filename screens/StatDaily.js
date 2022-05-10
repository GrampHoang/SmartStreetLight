import { StyleSheet, Text, View, ScrollView, Dimensions, FlatList } from 'react-native';
import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import StatGeneral from './StatGeneral';

var pwidth = Dimensions.get('window').width; //full width

export default function StatD() {
  //Tu Day
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  //File minh se catch co data sau: 
  // Data này thay đổi tuỳ theo ý muốn của mình, đây chỉ là số liệu ví dụ
  // "last_value": "{\"highest_temp\" : \"50\",
  //                 \"highest_temp_time\" : \"2022-05-08\",
  //                 \"total_car\" : \"34\",
  //                 \"most_car_month\" : \"04\"}",
  // nhu o duoi da access vao data.highest temp va no return 50
  // check feed cua ong Khanh de thu up len up xuong di
  // Đổi link ở trong cái fetch dưới và xem cái data có gì là đc
  const getData = async () => {
    try {
     const response = await fetch('https://io.adafruit.com/api/v2/khanhtran01/feeds/statical');
     const json = await response.json();
     const json_fix = JSON.parse(json.last_value)
     setData(json_fix);
   } catch (error) {
     console.error(error);
   } finally {
     setLoading(false);
   }
 }
 useEffect(() => {
   getData();
 }, []);
 //Den day la khuc lay data tu adafruit, data se nam trong data qua lenh setData

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
        <View style={{ flex: 1, padding: 24 }}>
        <Text>Nhiệt độ cao nhất: {data.highest_temp}{"\n"}
        Thời điểm có nhiệt độ cao nhất: {data.highest_temp_time}{"\n"}
        Tổng số xe vượt đèn?: {data.total_car}{"\n"}
        Nhiều xe nhất?: {data.most_car_month}
        </Text>
        </View>
            
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
