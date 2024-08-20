import express from 'express';
import * as path from 'path';
import environment from './environment/environment';
const counter = require('./counter/counter.router');

const app = express();

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to back!' });
});

app.use('/counter', counter);

const server = app.listen(environment.PORT, () => {
  console.log(`Listening at http://localhost:${environment.PORT}/api`);
});

server.on('error', console.error);
