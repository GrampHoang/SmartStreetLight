import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Dimensions } from "react-native";
var pwidth = Dimensions.get('window').width; //full width
export default function App() {
  return (
    <View style={styles.header}>
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
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text:{
        color: '#FFFFFF',
        fontSize: 24,
        textAlign: 'center',
    }
});
