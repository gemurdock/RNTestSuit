import { StyleSheet, Text, View } from 'react-native'

const TestScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Test Screen</Text>
            <Text onPress={() => navigation.navigate('Home')}>Go To Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TestScreen