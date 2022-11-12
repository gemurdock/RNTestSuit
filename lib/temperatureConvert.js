const round2Decimals = (number) => {
    return Math.round(number * 100) / 100;
}

const kelvinToFahrenheit = (kelvin) => {
    const f = (kelvin - 273.15) * 1.8 + 32
    return round2Decimals(f)
}

export {
    kelvinToFahrenheit
}