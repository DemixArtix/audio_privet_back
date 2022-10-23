const express = require('express');
const cors = require('cors');

const data = require('./mock/data.json');
const { port } = require('./config');
const app = express();

app.use(cors())

app.get('/', (req, res) => {
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})