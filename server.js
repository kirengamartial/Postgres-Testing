const express = require('express')
const QueriesRoutes = require('./routes/crudRoutes') 
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/', QueriesRoutes)

app.listen(3000, () => console.log('app is listening on port 3000'))