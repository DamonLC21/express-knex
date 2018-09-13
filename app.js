const express = require('express')
const app = express()
const port = process.env.port || 3005
const queries = require('./queries.js')
const bodyParser = require('body-parser')
const cors = require('cors')


app.use(bodyParser.json())

app.get('/',(req,res) =>{
    queries.getAll()
    .then(response => res.send(response))
})

app.get('/:firstName', (req,res) =>{
    queries.getByName(req.params.firstName)
    .then(response => res.send(response))
})

app.post('/',(req,res) => {
    res.send('🍌')
    queries.create(req.body)
    .then(response => res.json({response}))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})