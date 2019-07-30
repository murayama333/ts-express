import Express from 'express'

const app = Express()

app.get('/', (req, res) => {
  const data = {message: 'pong'}
  res.send(data)
})

app.post('/', (req, res) => {
  const data = {message: 'pong'}
  res.send("Got a POST request")
})

app.put('/', (req, res) => {
  res.send("Got a PUT request")
})

app.delete('/', (req, res) => {
  res.send("Got a DELETE request")
})

const port = 8888
const host = 'localhost'

app.listen(port, host, () => {
  console.log(`Running on http://${host}:${port}`)
})