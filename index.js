const express = require('express')
const tempRoute = require('./api/routes/temp')
const primeRoute = require('./api/routes/prime')
const numberRoute = require('./api/routes/number')

const app = express()

app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Welcome to my API</title>
            </head>
            <body>
                <h1>Hey whoever!</h1>
                <p>Everything you can do with this API:</p>
                <ul>
                    <li>/api/temp?celsius=25 for converting celsius to scientific unit named kelvin</li>
                    <li>/prime/limit=10 for prime numbers</li>
                    <li>/api/number?n=45 for Fibonacci numbers</li>
                </ul>
            </body>
        </html>
    `)
})

app.use('/api', tempRoute)
app.use('/api', primeRoute)
app.use('/api', numberRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`API running on port ${port}`)
})