// Sprint 1 - Database Programming. Using QAP 1 data tables created in pgAdmin to produce data using JavaScript.
// Completed by: Darla Ward, Danielle Reid and Jarod Chambers-Genge
// Completed on 02/28/2023

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const dbAccess = require("./data_access/db_access");
const port = 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Shows the data when navigating to the pages.
app.get("/cities", dbAccess.getCities);
app.get("/passengers", dbAccess.getPassengers);
app.get("/airports", dbAccess.getAirports);
app.get("/aircrafts", dbAccess.getAircrafts);
app.get("/city_airport", dbAccess.getCityAirport);
app.get("/passenger_aircraft", dbAccess.getPassengerAircraft);
app.get("/airport_aircraft", dbAccess.getAirportAircraft);
app.get("/airport_passenger", dbAccess.getAirportPassenger);

// Express Server Start
app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
