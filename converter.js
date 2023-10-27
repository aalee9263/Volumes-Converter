function convertVolume(unit) {
    let units = {
        liters: 1,
        milliliters: 1000,
        cubicmeters: 0.001,
        cubiccentimeters: 1000,
        fluidounces: 33.814,
        pints: 2.113,
        quarts: 1.057,
        gallons: 0.264
    };

    let value = parseFloat(document.getElementById(unit).value);

    for (let otherUnit in units) {
        if (otherUnit !== unit) {
            let convertedValue = value * units[unit] / units[otherUnit];
            document.getElementById(otherUnit).value = convertedValue;
        }
    }
}