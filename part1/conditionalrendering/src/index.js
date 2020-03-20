import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setRight(right + 1)
  }

  console.log(allClicks)

  return (
    <div>
      <div>
        {left}
        <button onClick={handleLeftClick}>left</button>
        <button onClick={handleRightClick}>right</button>
        {right}
        <p>{allClicks.join(' ')}</p>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
