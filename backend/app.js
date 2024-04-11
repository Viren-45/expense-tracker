const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const { readdirSync } = require('fs');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
readdirSync('./routes').forEach((route) => {
  const routePath = `./routes/${route}`;
  const routeModule = require(routePath);
  app.use('/api/v1', routeModule);
});

const server = () => {
  db();
  app.listen(PORT, () => {
    console.log('Listening to port:', PORT);
  });
};

server();
