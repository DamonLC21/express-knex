// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/g95-damon'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
