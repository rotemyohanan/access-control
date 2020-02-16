const superstruct = require('superstruct')
// const isEmail = require('is-email')
// const struct = superstruct({
//   types: {
//     email: value => isEmail(value)
//   }
// })

// Define a struct to validate with.
const User = superstruct.struct({
  id: 'number',
  name: 'string',
  email: 'string',
  password: 'string?',
  // tags: ['string?'],
  status: 'string'
})

module.exports.validateUser = (data) => {
  try {
    User(data)
    console.log('Valid!')
    return { value: data, err: null }
  } catch (e) {
    return { err: e, value: null }
  }
}

// const User = struct({
//     id: 'number',
//     email: 'string',
//     name: 'string',
//     password: 'string',
//     token: 'string?'
//     created: 'date'
//     status: struct.enum(['pending', 'blocked', 'active']),
//     tags: 'string?'
// })
