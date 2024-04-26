const express = require('express')
const QueriesRoutes = require('../routes/crudRoutes') 



const app = express()
app.use(express.json())

app.use('/api/v1', QueriesRoutes)
app.use('/',(req, res) => {
    res.send('Api is running really well')
})

app.listen(4000, () => console.log('app is listening on port 4000'))