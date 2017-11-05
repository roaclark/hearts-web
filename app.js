const express = require('express')
const path = require('path')
const socketio = require('socket.io')

const app = express()
const port = process.env.PORT || 3000

app.use('/static', express.static(path.join(__dirname, 'client/dist')))

app.get('/api', (req, res) => {
  res.send('Hello API!')
})

const server = app.listen(port, () => {
  console.log('Example app listening!')
})
const io = socketio(server, { path: '/api/events' })

io.on('connection', socket => {
  console.log('a user connected')
  socket.on('disconnect', () => {
    console.log('a user disconnected')
  })
})
