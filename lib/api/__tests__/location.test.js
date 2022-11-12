import { renderHook, waitFor } from '@testing-library/react-native'
import axios from "axios"
import { useLocation } from '../location'

const REQUEST_DATA = [{"name": "New York County",
        "local_names": {
            "en": "New York"
        },
        "lat": 40.7127281,
        "lon": -74.0060152,
        "country": "US",
        "state": "New York"}]

jest.mock('axios')

afterEach(() => {
    jest.clearAllMocks()
})

test('useLocation returns location', async () => {
    axios.get.mockResolvedValueOnce({ data: REQUEST_DATA })

    const { result, rerender } = renderHook(() => useLocation('New York', 'NY', 'US'))

    await waitFor(() => {
        rerender()
        expect(result.current.location).not.toEqual(null)
    }, { timeout: 10000 * 5 })

    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(result.current.location).toEqual({lon: -74.0060152, lat: 40.7127281})
})