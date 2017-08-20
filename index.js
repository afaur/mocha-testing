const express = require('express')
const app     = express()

const bp      = require('body-parser')
const handler = require('./handler')

// Middleware that decodes body and sets req.body
// if headers['content-type'] is application/json
app.use(bp.json())

// Handles posts to root route
app.post("*", handler)

// Listen for requests on port 3000
app.listen(3000)
