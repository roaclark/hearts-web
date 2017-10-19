const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static(path.join(__dirname, 'client/dist')))

app.get('/api', function (req, res) {
  res.send('Hello API!')
})

app.listen(port, function () {
  console.log('Example app listening!')
})