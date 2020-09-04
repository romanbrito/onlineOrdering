import React, {useState} from 'react'
import {navigate} from 'gatsby'
import {QButton} from './CartControls-styles'

const CartControls = ({cartCount, clearCart}) => {
  const [loading, setLoading] = useState(false)
  const redirectToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <>
      {cartCount > 0 ? (
        <QButton
          disabled={loading}
          onClick={() => {
            setLoading(true)
            redirectToCheckout()
          }}
        >
          {loading ? 'Loading...' : 'Checkout'}
        </QButton>
      ) : (
        ''
      )}

      {loading
        ? ''
        : cartCount > 0 && (
            <QButton disabled={cartCount < 1} onClick={clearCart}>
              Clear Cart
            </QButton>
          )}
    </>
  )
}

export default CartControls
