import { View, Text, StyleSheet } from 'react-native'
import { kelvinToFahrenheit as convT } from '../lib/temperatureConvert'
import { useLocation } from '../lib/api/location'
import { useWeather } from '../lib/api/weather'

const WeatherScreen = () => {
    const { location, error: locationError } = useLocation('New York', 'NY', 'US')
    const { weather, error: weatherError } = useWeather(location?.lat, location?.lon)
    return (
        <View style={styles.container}>
            <Text>Weather Screen</Text>
            {weather === null && (
                <Text>Loading...</Text>
            )}
            {weather !== null && (
                <>
                <Text>Feels like {convT(weather.main.feels_like)}</Text>
                <Text>Humidity {weather.main.humidity}%</Text>
                <Text>High: {convT(weather.main.temp_max)}</Text>
                <Text>Low: {convT(weather.main.temp_min)}</Text>
                </>
            )}
            <Text>{weatherError === null ? "No error" : "Error"}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    }
})

export default WeatherScreen