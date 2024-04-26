const express = require('express')
const QueriesRoutes = require('../routes/crudRoutes') 
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors({
    origin: '102.22.173.212'
}))

app.use('/api/v1', QueriesRoutes)
app.use('/',(req, res) => {
    res.send('Api is running...')
})

app.listen(4000, () => console.log('app is listening on port 4000'))