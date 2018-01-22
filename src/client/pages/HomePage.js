import React from 'react'

const Home = () => {
  return(
    [
      <div key="text">New changes</div>,
      <button key="btn" onClick={handleClick}>Press me!</button>
    ]
  )
}

function handleClick() {
  console.log('Hi there')
}

export default {
  component: Home
}