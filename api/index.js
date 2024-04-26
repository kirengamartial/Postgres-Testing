const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use('/',(req, res) => {
    res.send('Api is running really well')
})

app.listen(4000, () => console.log('app is listening on port 4000'))