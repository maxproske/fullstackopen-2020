import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  )
}

const Statistics = ({ bad, neutral, good }) => {
  const all = bad + neutral + good
  const average = (good + bad * -1) / all || 0
  const positive = ((good / all) * 100 || 0) + '%'

  return (
    <article>
      <h2>Statistics</h2>
      <Statistic text={`bad`} value={bad} />
      <Statistic text={`neutral`} value={neutral} />
      <Statistic text={`good`} value={good} />
      <Statistic text={`all`} value={all} />
      <Statistic text={`average`} value={average} />
      <Statistic text={`positive`} value={positive} />
    </article>
  )
}

const App = () => {
  const [bad, setBad] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [good, setGood] = useState(0)

  return (
    <section>
      <h1>Leave Feedback</h1>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setGood(good + 1)}>good</button>
      <Statistics bad={bad} neutral={neutral} good={good} />
    </section>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
