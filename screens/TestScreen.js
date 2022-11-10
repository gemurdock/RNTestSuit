import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const TestScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Test Screen</Text>
            <Button onPress={() => navigation.navigate('Home')}>Go To Home</Button>
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