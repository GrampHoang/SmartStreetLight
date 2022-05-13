import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

var pWidth = Dimensions.get('window').width;
var pHeight = Dimensions.get('window').height;

export default function HomeScreen({navigation}) {
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
      const response = await fetch(
        'https://io.adafruit.com/api/v2/khanhtran01/feeds/statical',
      );
      const json = await response.json();
      const json_fix = JSON.parse(json.last_value);
      setData(json_fix);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  //Den day la khuc lay data tu adafruit, data se nam trong data qua lenh setData

  return (
    <SafeAreaView style={styles.head}>
      <View style={styles.header}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={styles.img}
              source={require('../assets/images/bar-menu.webp')}
            />
          </TouchableOpacity>
          <Text style={styles.text_header}>Ngã tư Hàng Xanh</Text>
        </View>
      </View>
      <ScrollView>
        <View style={styles.contentHome}>
          <View style={styles.present_temp}>
            <Text style={styles.text}>Nhiệt độ hiện tại</Text>
            <Text
              style={{
                fontSize: 60,
                textAlign: 'center',
                marginTop: 6,
                color: data.total_car > 30 ? 'red' : 'blue',
              }}>
              13*C
            </Text>
          </View>
          <View
            style={{
              borderWidth: 3,
              height: 150,
              width: pWidth * 0.5 - 8,
              margin: 4,
              borderColor: '#003300',
              justifyContent: 'center',
              backgroundColor: data.total_car >= 30 ? '#E55451' : 'white',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: data.total_car > 29 ? 40 : 30,
                fontWeight: data.total_car > 29 ? 'bold' : 'normal',
                color: 'black',
              }}>
              Nóng
            </Text>
          </View>
          <View
            style={{
              borderWidth: 3,
              height: 150,
              width: pWidth * 0.5 - 8,
              margin: 4,
              borderColor: '#003300',
              justifyContent: 'center',
              backgroundColor: data.total_car < 30 ? '#33CCFF' : 'white',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: data.total_car < 30 ? 30 : 40,
                fontWeight: data.total_car < 30 ? 'bold' : 'normal',
                color: 'black',
              }}>
              Mát
            </Text>
          </View>
          <View style={styles.badCar}>
            <Text style={styles.text}>Số xe vượt đèn đỏ</Text>
            <Text
              style={{
                fontSize: 60,
                textAlign: 'center',
                marginTop: 6,
                color: data.total_car > 30 ? 'red' : 'blue',
              }}>
              {data.total_car}
            </Text>
          </View>
          <View style={styles.highest_temp}>
            <Text style={styles.text2}>Nhiệt độ cao nhất </Text>
            <Text style={styles.text_highest_temp}>{data.highest_temp}*C</Text>
          </View>
          <View style={styles.total_car}>
            <Text style={styles.text2}>Tháng nhiều xe nhất</Text>
            <Text style={styles.text_total_car}>{data.most_car_month}</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  head: {
    flex: 1,
  },
  header: {
    height: pHeight * 0.08,
    backgroundColor: 'yellow',
    width: pWidth,
    borderWidth: 3,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight,
    marginBottom: 4,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 1,
    width: 50,
    height: 50,
    marginLeft: 6,
  },
  text_header: {
    flex: 1,
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentHome: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'center',
    justifyContent: 'center',
  },
  present_temp: {
    borderWidth: 3,
    height: 150,
    width: pWidth - 8,
    margin: 4,
    borderColor: '#003300',
  },
  text: {
    fontSize: 27,
    fontStyle: 'italic',
    marginLeft: 4,
    color: '#003300',
  },
  badCar: {
    borderWidth: 3,
    height: 150,
    width: pWidth - 8,
    margin: 4,
    borderColor: '#003300',
  },
  highest_temp: {
    borderWidth: 3,
    height: 150,
    width: pWidth * 0.5 - 8,
    margin: 4,
    borderColor: '#003300',
  },
  total_car: {
    borderWidth: 3,
    height: 150,
    width: pWidth * 0.5 - 8,
    margin: 4,
    borderColor: '#003300',
  },
  text2: {
    fontSize: 20,
    fontStyle: 'italic',
    marginLeft: 4,
    color: '#003300',
  },
  text_highest_temp: {
    fontSize: 40,
    textAlign: 'center',
    color: 'green',
    marginTop: 25,
  },
  text_total_car: {
    fontSize: 40,
    textAlign: 'center',
    color: 'green',
    marginTop: 25,
  },
});
