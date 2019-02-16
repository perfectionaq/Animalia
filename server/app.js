const express = require('express');
const app     = express();

const PORT = process.env.PORT || 8080;

const users   = require('./routes/users');
const animals = require('./routes/animals');

require('./startup/db')();

app.use(express.json());
app.use('/api/users', users);
app.use('/api/animals', animals);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});