import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Display from './Display'
import Button from './Button'

const App = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)

  return (
    <div>
      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
