import React, { createContext, useState } from 'react'
let cartContaxt = createContext();

export default function MainContaxt(props) {
  
  let [cart, setCart] = useState([])
  return (
    <cartContaxt.Provider value={
      {
        cart, setCart
      }
    }>
      {props.children}
    </cartContaxt.Provider>
  )
}

export { cartContaxt }
