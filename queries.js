const dbConnection = require('./knexfile.js')[process.env.NODE_ENV || 'development']
const knex = require('knex')(dbConnection)

module.exports = {
    getAll(){
        return knex.select().from('students')
    }
}