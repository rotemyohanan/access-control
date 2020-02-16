const express = require('express')
const router = express.Router()
const flightService = require('../services/userService')
const userValidator = require('../validators/validateUser')

router.get('/', async (req, res) => {
  console.log('This is the main path')
  return res.status(200).send('A new main request succeeded')
})

router.get('/health-check', async (req, res) => {
  console.log('successful health-check')
  return res.status(200).send('health-check ok')
})

// Create a new user
router.post('/users', async (req, res) => {

})

router.get('/test', async (req, res) => {
  const mockUser = {
    id: 1,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: '1234',
    // departments: ['engineering', 'product'],
    status: 'active'
  }
  userValidator.validateUser(mockUser)
})

// Create user credentials
router.post('/', async (req, res) => {

})

// Check if user exists in the
router.get('/', async (req, res) => {
  // extract the query parameter email = 'aaa@gmail.com'
  const email = req.query.email

  // validate it is a valid email

  // set a connection to the mongoDB
  // find if the user exists in the db (uniqness by email)
  debug.findUser(email)
  // if yes return the user data
  return res.status(200).json({ userData })
})

router.post('/flights', async (req, res) => {
  const name = req.body.name
  console.log(`A new flight with name: ${name}, was recorded.`)
  const newflight = await flightService.createNewFlight(req)
  return res.status(201).send(`A new flight name: ${newflight.name} was created in the database: ${newflight}`)
})

module.exports = router
