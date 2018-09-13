const express = require('express')
const app = express()
const port = process.env.port || 3000
const queries = require('./queries.js')


app.get('/',(req,res) =>{
    queries.getAll()
    .then(response => res.send(response))
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})