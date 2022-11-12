import { renderHook, waitFor } from '@testing-library/react-native'
import axios from "axios"
import { useWeather } from '../weather'

const REQUEST_DATA = {"base": "stations", "clouds": {"all": 100}, "cod": 200, "coord": {"lat": 40.7128, "lon": -74.0059},
"dt": 1668215247, "id": 5128581, "main": {"feels_like": 293.18, "humidity": 92, "pressure": 1006,
"temp": 292.76, "temp_max": 294.64, "temp_min": 291.45}, "name": "New York", "sys": {"country": "US",
"id": 2039034, "sunrise": 1668166690, "sunset": 1668202924, "type": 2}, "timezone": -18000, "visibility": 8047,
"weather": [{"description": "mist", "icon": "50n", "id": 701, "main": "Mist"}], "wind": {"deg": 158, "gust": 11.18, "speed": 8.49}}

jest.mock('axios')

afterEach(() => {
    jest.clearAllMocks()
})

test('useWeather returns weather', async () => {
    axios.get.mockResolvedValueOnce({ data: REQUEST_DATA })

    const { result, rerender } = renderHook(() => useWeather(40.7128, -74.0059))

    await waitFor(() => {
        rerender()
        expect(result.current.weather).not.toEqual(null)
    }, { timeout: 10000 * 5 })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(result.current.weather).toEqual(REQUEST_DATA)
})

test('useWeather given null input', async () => {
    axios.get.mockResolvedValueOnce({ data: REQUEST_DATA })

    const { result, rerender } = renderHook(() => useWeather(null, null))

    await waitFor(() => {
        rerender()
        expect(result.current.weather).toEqual(null)
    }, { timeout: 10000 * 5, interval: 100 })

    expect(axios.get).toHaveBeenCalledTimes(0)
    expect(result.current.weather).toEqual(null)
})