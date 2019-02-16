const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

const users = require('./routes/users');

require('./startup/db')();

app.use(express.json());
app.use('/api/users', users);

app.listen(PORT, () => {
  console.log('Listening on port: ', PORT);
});