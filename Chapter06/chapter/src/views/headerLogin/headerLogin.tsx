import React, { useState } from 'react';
import './headerLogin.css'

const HeaderLogin: React.FC = () => {
  let [num, setNum] = useState(0)

  const numClick = () => {
    const newNumber = num + 1
    setNum(newNumber)
  }

  return (
    <div className="home-page">
      Header Login
      <span onClick={numClick}>
        { num }
      </span>
    </div>
  )
}

export default HeaderLogin