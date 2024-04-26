const express = require('express')
const QueriesRoutes = require('./routes/crudRoutes') 
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/', QueriesRoutes)

app.listen(4000, () => console.log('app is listening on port 4000'))