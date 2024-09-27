exports.convertTemperature = (req, res) => {
    const celsius = parseFloat(req.query.celsius);
    const kelvin = parseFloat(req.query.kelvin);

    if (!isNaN(celsius)) {
        const kelvinValue = celsius + 273.15;
        return res.json({ celsius, kelvin: kelvinValue });
    } else if (!isNaN(kelvin)) {
        const celsiusValue = kelvin - 273.15;
        return res.json({ kelvin, celsius: celsiusValue });
    } else {
        return res.status(400).json({ error: 'Invalid parameter, please provide either "celsius" or "kelvin"' });
    }
};