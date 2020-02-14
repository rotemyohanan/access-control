const positiveControl = require('../services/positiveControlService')
const { mockRequest, mockResponse } = require('mock-req-res')
const awsConstants = require('../constants/awsConstants')

describe('main tests', () => {
  test('Successfully create a new positive control', () => {
  // setup: (Initializing the parameters)
    const mut = 'C.1048A>G'
    const g = 'BLM'
    const sampleName = 'NA987454'

    // when:
    const req = mockRequest({ body: { isBest: true, mutation: mut, gene: g, sampleID: sampleName } })

    const result = positiveControl.createNewPositiveControl(req)
    // then:
    expect(result.mutation).toBe(`${mut}`)
    expect(result.gene).toBe(`${g}`)
    expect(result.name).toBe(`${g}_${mut}`)
    expect(result.sampleID).toBe(`${sampleName}`)
    expect(result.isBest).toBeTruthy()
  })

  test('Checking the name creation - replacing the > to _To_', () => {
  // setup: (Initializing the parameters)
    const mut = 'C.1048A>G'
    const g = 'BLM'
    const sampleName = 'NA987454'
    const expectedMut = 'C.1048A_To_G'

    // when:
    const req = mockRequest({ body: { isBest: true, mutation: mut, gene: g, sampleID: sampleName } })

    const result = positiveControl.createNewPositiveControl(req)
    // then:
    expect(result.url).toBe(`${awsConstants.baseUrl}/${g}_${expectedMut}_${sampleName}_BEST.png`)
  })
})
