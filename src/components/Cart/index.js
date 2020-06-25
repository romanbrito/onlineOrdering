import React, {useState} from 'react'
import {useShoppingCart} from 'use-shopping-cart'

const Cart = () => {
  const [loading, setLoading] = useState(false)
  const {
    totalPrice,
    redirectToCheckout,
    cartCount,
    clearCart,
  } = useShoppingCart()

  return (
    <>
      <p>Number of Items: {cartCount}</p>
      {/* <p>Total: {totalPrice()}</p> */}
      <button
        disabled={loading}
        onClick={() => {
          setLoading(true)
          redirectToCheckout()
        }}
      >
        {loading ? 'Loading...' : 'Checkout'}
      </button>
      <button onClick={clearCart}>Clear Cart</button>
    </>
  )
}

export default Cart
