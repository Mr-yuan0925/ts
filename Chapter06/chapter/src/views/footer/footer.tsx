import React, { useState } from 'react';
import './footer.css'

const Footer: React.FC = () => {
  let [num, setNum] = useState(0)

  const numClick = () => {
    const newNumber = num + 1
    setNum(newNumber)
  }

  return (
    <div className="home-page">
      Footer 
      <span onClick={numClick}>
        { num }
      </span>
    </div>
  )
}

export default Footer