import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
  const component = parts.map((part) => {
    return <Part name={part.name} exercise={part.exercise} />
  })

  return <>{component}</>
}

export default Content
