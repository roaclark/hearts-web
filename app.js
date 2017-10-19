const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.join(__dirname, 'client/dist')))

app.get('/api', function (req, res) {
  res.send('Hello API!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})