import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import personService from './services/persons'

const Notification = ({ message }) => {
  const style = {
    color: 'white',
    fontStyle: 'italic',
    width: '100%',
    padding: '1rem',
    fontSize: 16,
    backgroundColor: 'grey',
  }
  return (
    message && (
      <div style={style} className="error">
        {message}
      </div>
    )
  )
}

const Numbers = ({ persons, handleDeleteClick }) => {
  console.log(persons)
  return (
    <article>
      <h2>Numbers</h2>
      {persons.length > 0 && (
        <ul>
          {persons.map((person) => (
            <li key={person.id}>
              {person.name} {person.phone}{' '}
              <button onClick={() => window.confirm('Are you sure?') && handleDeleteClick(person.id)}>delete</button>
            </li>
          ))}
        </ul>
      )}
    </article>
  )
}

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data)
    })
  }, [])

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    let newId = 1
    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} already exists in the phone book!`)
        return
      }
      if (persons[i].phone === newPhone) {
        personService.update(persons[i].id, { ...persons[i], name: newName }).then((response) => {
          setPersons(persons.map((person) => (person.id !== persons[i].id ? person : response.data)))
        })
        return
      }
      if (persons[i].id >= newId) {
        newId = persons[i].id + 1
      }
    }

    const newPerson = {
      id: newId,
      name: newName,
      phone: newPhone,
    }
    personService.create(newPerson).then(() => {
      setErrorMessage(`Added ${newPerson.name} to the phone book!`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000)
    })

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewPhone('')
  }

  const handleDeleteClick = (id) => {
    personService.remove(id).then(() => {
      setPersons(persons.filter((person) => person.id !== id))
    })
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange} required />
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange} required />
        </div>
        <div>
          <button disabled={!newName.length || !newPhone.length}>add</button>
        </div>
      </form>
      <Numbers persons={persons} handleDeleteClick={handleDeleteClick} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
