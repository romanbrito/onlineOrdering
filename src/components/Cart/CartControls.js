import React, {useState} from 'react'
import {navigate} from 'gatsby'

const CartControls = ({cartCount, clearCart}) => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <>
      {cartCount > 0 ? (
        <button
          disabled={loading}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
        >
          {loading ? 'Loading...' : 'Checkout'}
        </button>
      ) : (
        <button disabled={true}>Checkout</button>
      )}

      {loading ? (
        ''
      ) : (
        <button disabled={cartCount < 1} onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </>
  )
}

export default CartControls
