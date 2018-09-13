const express = require('express')
const app = express()
const port = process.env.port || 3005
const queries = require('./queries.js')


app.get('/',(req,res) =>{
    queries.getAll()
    .then(response => res.send(response))
})

app.get('/:firstName', (req,res) =>{
    queries.read(req.params.firstName)
    .then(response => res.send(response))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})