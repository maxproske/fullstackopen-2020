import React from 'react'

const History = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return (
      <div>
        <p>the app is used by pressing the buttons</p>
      </div>
    )
  }

  return (
    <div>
      <p>button press history: {allClicks.join(' ')}</p>
    </div>
  )
}

export default History
