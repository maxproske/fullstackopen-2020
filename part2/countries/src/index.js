import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [displayCountries, setDisplayCountries] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
      setCountries(response.data)
    })
  }, [])

  const handleChange = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const updatedDisplayCountries = countries.filter((country) =>
      country.name.toUpperCase().includes(search.toUpperCase())
    )

    setDisplayCountries(updatedDisplayCountries)
  }

  console.log(countries)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        find countries <input value={search} onChange={handleChange} />
      </form>
      {displayCountries.length > 10
        ? 'Too many countries, specify another filter'
        : displayCountries.map((country) => {
            return (
              <div key={country.alpha3Code}>
                {country.name} <br /> <img src={country.flag} alt={country.name} width="100" />
              </div>
            )
          })}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
