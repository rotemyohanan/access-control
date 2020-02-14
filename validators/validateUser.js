const superstruct = require('superstruct')
const isEmail = require('is-email')

const struct = superstruct({
    types: {
        email: value => isEmail(value)
    }
})

const User = struct({
    id: 'number',
    email: 'string',
    name: 'string',
    password: 'string',
    token: 'string?'
    created: 'date'
    status: struct.enum(['pending', 'blocked', 'active']),
    tags: 'string?'
})