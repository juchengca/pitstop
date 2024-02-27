const express = require('express')
const path = require('path');

const app = express()
const port = 3000

const routes = require('./routes.js');

app.use(express.json());
app.use(express.static(path.join(__dirname + '/../client/dist')));
app.use('/', routes);

app.listen(port, () => {
  console.log(`PitStop listening on port ${port}`)
})