const express = require('express')
const app = express()
const port = process.env.port || 3000

app.get('/', (require,response) => {
    response.send('The Route Worked!')
})

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})