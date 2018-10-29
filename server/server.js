require('dotenv').config()
const express = require('express')
const app = express()

const apiRouter = require('./routes/api')


const PORT = process.env.API_PORT || 5000

app.use('/api',apiRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))
