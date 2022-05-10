import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { Dimensions } from "react-native";

var pwidth = Dimensions.get('window').width; //full width

export default function App() {
  return (
    <View style={styles.header}>
      <StatusBar/>
      <Text style={styles.text}> Ngã tư Thủ Đức </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    header: {
        height: 60,
        backgroundColor: "#367BF5",
        width: pwidth,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: StatusBar.currentHeight,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#FFFFFF',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
    }
});