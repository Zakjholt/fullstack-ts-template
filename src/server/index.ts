const path = require('path')
const express = require('express')
const app = express()

app.use(express.static('dist/app'))

app.listen(3000)
