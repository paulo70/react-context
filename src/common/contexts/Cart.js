import { createContext, useState } from 'react'

export const CartContext = createContext()
CartContext.displayName = 'Cart'

const CartContenxtProvider = ({ children }) => {
  const [car, setCart] = useState([])
  console.log(car, 'context')
  return (
    <CartContext.Provider value={{ car, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContenxtProvider