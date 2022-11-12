import { kelvinToFahrenheit } from "../temperatureConvert"

test('kevlinToCelsius', () => {
    expect(kelvinToFahrenheit(273.15)).toBe(32)
    expect(kelvinToFahrenheit(273.15 + 1)).toBe(33.8)
    expect(kelvinToFahrenheit(273.15 - 1)).toBe(30.2)

    expect(kelvinToFahrenheit(0)).toBe(-459.67)
    expect(kelvinToFahrenheit(50)).toBe(-369.67)
    expect(kelvinToFahrenheit(100)).toBe(-279.67)
    expect(kelvinToFahrenheit(120)).toBe(-243.67)
})