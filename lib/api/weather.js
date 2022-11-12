import { useEffect, useState } from "react"
import axios from "axios"
import { weatherAPIKey as API_KEY } from "../apiKeys"

export const useWeather = (lat, lon) => {
    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getWeather = async () => {
            if(lat === null || lon === null) {
                setWeather(null)
                return
            }
            try {
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
                let response = await axios.get(url)
                setWeather(response.data)
            } catch (error) {
                setError(error)
            }
        }
        getWeather()
    }, [lat, lon])

    return { weather, error }
}
