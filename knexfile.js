// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/g95-damon'
    }
  },

  production: {
    client: 'pg',
    connection: 'process.env.postgresql://localhost/g95-damon'
  }

};
