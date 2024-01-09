import express from 'express';
import config from './config.js';
require('dotenv').config();

var compression = require('compression');

const secrets = {
  apiUrl: process.env.API_URL,
  socketUrl: process.env.SOCKET_URL,
};

const app = require('express')();
const server = require('http').createServer(app);

const routes = ['/'];
// compress all responses
app.use(compression());
app.get(routes, (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>VDO Doc</title>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, height=device-height, viewport-fit=cover"
      />
      <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css'>
      <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Marck+Script|Montserrat:600&display=swap" rel="stylesheet">
      </head>
      <body>
      <div id="root"></div>
      <script>
        window.secrets = ${JSON.stringify(secrets)}
      </script>
      <script src="/bundle.js"></script>
      </body>
    </html>
  `);
});
app.use(express.static('public'));

server.listen(config.port, () => {
  console.log('Server listening on Port', config.port);
});
