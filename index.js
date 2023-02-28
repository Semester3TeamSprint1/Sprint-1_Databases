const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const dbAccess = require('./data_access/db_access')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/cities', dbAccess.getCities)
app.get('/passengers', dbAccess.getPassengers)
app.get('/airports', dbAccess.getAirports)
app.get('/aircrafts', dbAccess.getAircrafts)
app.get('/city_airport', dbAccess.getCityAirport)
app.get('/passenger_aircraft', dbAccess.getPassengerAircraft)
app.get('/airport_aircraft', dbAccess.getAirportAircraft)
app.get('/airport_passenger', dbAccess.getAirportPassenger)

// Express Server Start
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })