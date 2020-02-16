const superstruct = require('superstruct')

// Define a struct to validate with.
const User = superstruct.struct({
  id: 'number',
  name: 'string',
  email: 'string',
  password: 'string?',
  tags: ['string?'],
  status: 'string'
})

// Define data to be validated.
const data = {
  id: 1,
  name: 'Jane Smith',
  email: 'jane@example.com',
  password: '1234',
  departments: ['engineering', 'product'],
  status: 'active'
}

// Validate the data. In this case, the data is valid, so it won't throw.
try {
  User(data)
  console.log('Valid!')
} catch (e) {
  throw e
}
