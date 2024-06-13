import React from 'react'
import "./button.css";

const Button = ({children,handleClick}) => {
  return (
    <React.Fragment>
      <button onClick={handleClick} className='buttonContainer'>
        {children}
      </button>
    </React.Fragment>
  )
}

export default Button