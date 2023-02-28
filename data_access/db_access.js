const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "QAP1",
  password: "cupcake",
  port: 5432,
});

// Gets data for cities.
const getCities = (request, response) => {
  pool.query("SELECT * FROM city ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Gets data for passengers.
const getPassengers = (request, response) => {
  pool.query("SELECT * FROM passenger ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Gets data for airports.
const getAirports = (request, response) => {
  pool.query("SELECT * FROM airport ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Gets data for aircrafts.
const getAircrafts = (request, response) => {
  pool.query("SELECT * FROM aircraft ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

// Gets data to show what AIRPORTS are in what CITIES.
const getCityAirport = (request, response) => {
  pool.query(
    "select * from airport a, city c where a.city_id = c.id order by c.city_state;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Gets data for a list of AIRCRAFTS that PASSENGERS have travelled on.
const getPassengerAircraft = (request, response) => {
  pool.query(
    "select p.first_name, p.last_name, a.aircraft_type, a.airline_name from passenger p, aircraft a, passenger_aircraft pa where pa.passenger_id = p.id and pa.aircraft_id = a.id order by p.last_name;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Gets data for what AIRPORTS can AIRCRAFTS take off and land at.
const getAirportAircraft = (request, response) => {
  pool.query(
    "select c.city_name as depart_city, c.city_state as depart_state, ap.airport_name as depart_airport, ap.airport_code as depart_code, ac.aircraft_type, ar.city_name as arrival_city, ar.city_state as arrival_state from airport ap, aircraft ac, city c, arrival_city ar, flight f where ap.id = f.airport_id and ac.id = f.aircraft_id and c.id = f.depart_id and ar.id = f.arrive_id order by ap.airport_name;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

// Gets data for what AIRPORTS have PASSENGERS used.
const getAirportPassenger = (request, response) => {
  pool.query(
    "select p.first_name, p.last_name, a.airport_name, a.airport_code from passenger p, airport a, passenger_airport pa where pa.passenger_id = p.id and pa.airport_id = a.id order by p.last_name;",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

module.exports = {
  getCities,
  getPassengers,
  getAirports,
  getAircrafts,
  getCityAirport,
  getPassengerAircraft,
  getAirportAircraft,
  getAirportPassenger,
};
