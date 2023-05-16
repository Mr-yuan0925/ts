import React, { useState } from 'react';
import './home.css'

const Home: React.FC = () => {
  let [num, setNum] = useState(0)

  const numClick = () => {
    const newNumber = num + 1
    setNum(newNumber)
  }

  return (
    <div className="home-page">
      <span onClick={numClick}>
        { num }
      </span>
    </div>
  )
}

export default Home