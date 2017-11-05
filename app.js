const express = require('express')
const path = require('path')
const socket = require('socket.io')

const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static(path.join(__dirname, 'client/dist')))

app.get('/api', (req, res) => {
  res.send('Hello API!')
})

const server = app.listen(port, () => {
  console.log('Example app listening!')
})
const io = socket.listen(server)

io.path('/events').on('connection', socket => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})
