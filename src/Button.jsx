import React from 'react'

const Button = () => {
    const handleclick = () => console.log("OUCH")
  return (
    <button onClick={handleclick} >Click Me</button>
  )
}

export default Button
