const userService = require('../services/userService')
const { mockRequest, mockResponse } = require('mock-req-res')
const awsConstants = require('../constants/awsConstants')

const validUser = { name: 'Yoram', email: 'a@gmail.com', password: '123456' }

describe('main tests', () => {
  test('Successfully create a user', () => {
    // setup: (Initializing the parameters)

    // when:
    const req = mockRequest({ body: { } })
    const result = userService.createNewUser(req)
    // then:
    expect(result.name).toBe(validUser.name)
    expect(result.email).toBe(validUser.email)
    expect(result.password).toBe(validUser.password)
  })

  test('Checking the sanitation process', () => {
    // setup: (Initializing the parameters)

    // when:
    const req = mockRequest({ body: { isBest: true, mutation: mut, gene: g, sampleID: sampleName } })
    const result = positiveControl.createNewPositiveControl(req)
    // then:

    expect(result.url).toBe(`${awsConstants.baseUrl}/${g}_${expectedMut}_${sampleName}_BEST.png`)
  })
})
