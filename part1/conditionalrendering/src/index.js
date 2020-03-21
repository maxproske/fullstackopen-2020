import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import History from './History'

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = (char) => () => {
    setAllClicks(allClicks.concat(char))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }

  const bad = (props) => <h1>Test</h1>

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick('L')}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <History allClicks={allClicks} />
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
