const express = require('express')
const tempRoute = require('./api/routes/temp')
const primeRoute = require('./api/routes/prime')
const numberRoute = require('./api/routes/number')

const app = express()

app.use('/api', tempRoute)
app.use('/api', primeRoute)
app.use('/api', numberRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`API running on port ${port}`)
})