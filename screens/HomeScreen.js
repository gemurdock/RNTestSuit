import { StyleSheet, Text, View } from 'react-native'
import Button from '../components/Button'

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
            <Button onPress={() => navigation.navigate('Test')}>Go To Test</Button>
            <Button onPress={() => navigation.navigate('Weather')}>Go To Weather</Button>
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

export default HomeScreen