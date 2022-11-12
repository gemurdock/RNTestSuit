import { useEffect, useState } from "react"
import axios from "axios"
import { weatherAPIKey as API_KEY } from "../apiKeys"

export const useLocation = (city, state, country, limit=1) => {
    const [location, setLocation] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getLocation = async () => {
            try {
                let response = null
                const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&${limit}=1&appid=${API_KEY}`
                response = await axios.get(url)
                const lon = response.data[0].lon
                const lat = response.data[0].lat
                setLocation({lon, lat})
            } catch (error) {
                setError(error)
            }
        }
        getLocation()
    }, [city, state, country])

    return { location, error }
}