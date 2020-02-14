const { url } = require('../constants/generalConstants')

module.exports = (config, logger) => {

async function createNewUser (req) {
  const { name, email, password } = req.body
  const created = moment().format('DD-MM-YYYY')
  const status = 'pending' // default value when creating a new user
  const newUser = new User({ name, email, password, created, status })
  const result = await newUser.save()
  return result
}
}
