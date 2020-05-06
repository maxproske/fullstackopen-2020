const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Crors middleware
app.use(cors())

// JSON parser middleware
app.use(express.json())

// Logging middleware
morgan.token('body', (req) => Object.keys(req.body).length && JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

// React client
app.use(express.static('build'))

let persons = [
  {
    id: 1,
    name: 'Joe',
    phone: '604-123-4567',
  },
  {
    id: 2,
    name: 'Twily',
    phone: '778-345-1234',
  },
  {
    id: 3,
    name: 'Mark',
    phone: '123-098-1468',
  },
]

app.get('/', (req, res) => {
  res.send('<h1>Phone Book App</h1>')
})

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/info', (req, res) => {
  res.send(`Phonebook has info for ${persons.length} people<br/><br/>${new Date()}`)
})

app.get('/api/persons/:id', (req, res) => {
  const id = parseInt(req.params.id)
  const person = persons.find((person) => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id)
  persons = persons.filter((person) => person.id !== id)

  res.status(204).end()
})

const generateId = () => {
  const maxId = persons.length > 0 ? Math.max(...persons.map((n) => n.id)) : 0
  return maxId + 1
}

app.post('/api/persons', (req, res) => {
  const person = req.body

  if (!person) {
    res.status(400).send('Missing person')
    return
  }
  if (!person.name) {
    res.status(400).send('Missing name')
    return
  }
  if (!person.phone) {
    res.status(400).send('Missing phone')
    return
  }

  if (persons.find((x) => x.name === person.name)) {
    res.status(409).send('Name already exists')
    return
  }
  if (persons.find((x) => x.phone === person.phone)) {
    res.status(409).send('Phone already exists')
    return
  }

  person.id = generateId()
  person.date = new Date()

  persons.push(person)
  res.json(person)
})

// After our code to catch non-existant routes
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
