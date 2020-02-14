const express = require('express')
const app = express()
const mongoose = require('mongoose')
// const positiveControlSchema = require('../data/models/positivecontrol').positiveControlSchema
// const PositiveControl = require('../data/models/positivecontrol').PositiveControl
// const positiveControlService = require('../data/services/positiveControlService')
const config = require('./config/defaultConfig')
const { port } = config
const pino = require('pino')
const flightRouter = require('./routes/apiRoutes')
// const logger = require('./middlewares/logger')
const startupDebugger = require('debug')('app:startup')
const dbDebugger = require('debug')('app:db')

// mongoose.connect('mongodb://127.0.0.1/airwits')
// .then( () => console.log('Connected to MongoDB ...'))
// .catch(err => console.error('Could not connect to MongoDB ...', err))

app.use(express.json())
app.use('/api/v1', flightRouter)

// console.log(`app host: ${config.get("website.host")}`)
startupDebugger('Main application is running')
// console.log(`Mail password: ` + config.get('mail.password'))
dbDebugger('Connected to the database library ____ ')

/* app.get("/api/v1/positive-controls/sampleId/:sampleId/variant-name/:name", async (req, res) => {
    let variantName = req.params.name
    debugger
    const result = await PositiveControl.find({name : variantName})
    if(!result) {
        res.status(404).send(`Positive control name: ${variantName} does not exist in the database`)
    }
    res.status(200).send(`Positive control name: ${variantName} was found in the database` )
})

app.post("/api/v1/positive-controls", async (req, res) => {
    let fullName = `${req.body.gene}_${req.body.mutation}`
    console.log("Full name : " + fullName)
    const existingPositiveControl = await PositiveControl.find({name: fullName})
    console.log(existingPositiveControl)
    if(existingPositiveControl.length >0) {
        return res.status(409).send(`Positive control name: ${fullName} already exists in the database`)
    }
    const positiveControl = positiveControlService.createNewPositiveControl(req)
    const result = await positiveControl.save()
    return res.status(201).send(`A new positive control name: ${result.name} was created in the database: ${result}`)
})
*/
app.listen(port, () => console.log(`The application is listenning on port ${port}`))
