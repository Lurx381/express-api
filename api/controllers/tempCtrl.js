exports.convertTemperature = (req, res) => {
    const celsius = parseFloat(req.query.celsius)

    if (isNaN(celsius)) {
        return res.status(400).json({ error: 'Invalid *C Value' })
    }
    const kelvin = celsius + 273.15
    res.json({ kelvin, celsius })
}