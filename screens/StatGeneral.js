import { StyleSheet, Text, View } from 'react-native';

export default function StatGeneral() {
    return(
        <View>
            <View style={styles.statGeneral}>
                <Text style={styles.ContentStat}>Thời điểm có nhiệt độ cao nhất: </Text>
                <Text style={styles.ContentStat}>Tháng có số xe vượt đèn đỏ nhiều nhất: </Text>
                <Text style={styles.ContentStat}>Tổng lượng xe vượt đèn đỏ đã ghi nhận: </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    statGeneral: {
        marginLeft: 12,
        marginTop: 10,
    },
    HeaderStat: {
        fontSize: 18,
        margin: 5,
        marginLeft: 5,
        fontWeight: 'bold'
    },
    ContentStat: {
        marginBottom: 5,
        color: 'red',
        fontWeight: 'bold',
    },
});