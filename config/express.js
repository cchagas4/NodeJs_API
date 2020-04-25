const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');
const consign    = require('consign');

const { Pool } = require('pg')
const pool = new Pool({
    user: 'me',
    password: 'password',
    database: 'api'
})

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));

  // MIDDLEWARES
  app.use(bodyParser.json());
  app.use(
    bodyParser.urlencoded({
      extended: true,
    })
  )

  // DB CONNECT
  ;(async function() {
    const client = await pool.connect()
    await client.query('SELECT NOW()')
    console.log('Connection established with the database')
    client.release()
  })()
  
  // ENDPOINTS
  consign({cwd: 'api'})
  .then('data')
  .then('controllers')
  .then('routes')
  .into(app);

  app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API by CChagas Corp' })
  })
  
  return app;
};