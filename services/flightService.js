// const Flight = require('../models/flight').Flight
const { url } = require('../constants/generalConstants')

async function createNewFlight (req) {
  const newFlight = new Flight({
    name: req.body.name,
    flightId: req.body.flightId,
    source: req.body.source,
    status: req.body.status,
    comments: req.body.comments,
    url
  })
  //
  const result = await newFlight.save()
  return result
}

// async function getAllFlights (req) {
//   const flights = await Flight.find()
//   console.log(flights)

//   return flights
// }

module.exports = { createNewFlight }
