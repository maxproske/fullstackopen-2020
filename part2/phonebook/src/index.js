import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Numbers = ({ persons }) => {
  return (
    <article>
      <h2>Numbers</h2>
      {persons.length && (
        <ul>
          {persons.map((person) => (
            <li key={person.name}>{person.name}</li>
          ))}
        </ul>
      )}
    </article>
  )
}

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas' }])
  const [newName, setNewName] = useState('')
  const [newPhone, setNewPhone] = useState('')

  const handleNameChange = (e) => {
    setNewName(e.target.value)
  }

  const handlePhoneChange = (e) => {
    setNewPhone(e.target.value)
  }

  const addPerson = (e) => {
    e.preventDefault()

    for (let i = 0; i < persons.length; i++) {
      if (persons[i].name === newName) {
        alert(`${newName} already exists in the phone book!`)
        return
      }
      if (persons[i].phone === newPhone) {
        alert(`${newPhone} already exists in the phone book!`)
        return
      }
    }

    setPersons(persons.concat({ name: newName, phone: newPhone }))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
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
      <Numbers persons={persons} />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
