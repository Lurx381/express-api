const express = require('express')
const tempRoute = require('./routes/temp')
const primeRoute = require('./routes/prime')
const numberRoute = require('./routes/number')

const app = express()

app.use('/api', tempRoute)
app.use('/api', primeRoute)
app.use('/api', numberRoute)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`API running on port ${port}`)
})