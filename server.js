const express = require('express');
const app = express();

app.get('/message', function (req, res) {
  res.send('oi!')
});


app.get('/api/message', function (req, res) {
  res.send('Hello World!')
});

app.get('/api/auth', function (req, res) {
  res.status(400).send('auth error');
});

app.get('/api/unknown', function (req, res) {
  res.status(500).send('something went wrong');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});
