const express = require('express')
const router = express.Router()
const flightService = require('../services/flightService')

router.get('/', async (req, res) => {
  console.log('This is the main path')
  return res.status(200).send('A new main request succeeded')
})

router.get('/health-check', async (req, res) => {
  console.log('successful health-check')
  return res.status(200).send('health-check ok')
})

router.post('/flights', async (req, res) => {
  const name = req.body.name
  console.log(`A new flight with name: ${name}, was recorded.`)
  const newflight = await flightService.createNewFlight(req)
  return res.status(201).send(`A new flight name: ${newflight.name} was created in the database: ${newflight}`)
})

module.exports = router
