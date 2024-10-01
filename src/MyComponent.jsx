import React from 'react'
import { useState } from 'react'

const MyComponent = () => {

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState();
  return (
    <div>
      <input type="text" placeholder='Enter your name'/>
      <p>Name: {name} </p>
    </div>
  )
}

export default MyComponent
