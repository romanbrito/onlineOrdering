import React, {useState} from 'react'
import {navigate} from 'gatsby'
import {useShoppingCart, formatCurrencyString} from 'use-shopping-cart'
import ClosePage from '../ClosePage'
import CartList from './CartList'

const Cart = () => {
  const [loading, setLoading] = useState(false)
  const {
    totalPrice,
    // redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart()

  console.log(cartDetails)
  const items = Object.values(cartDetails)

  const redirectToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <>
      <ClosePage />
      <p>Number of Items: {cartCount}</p>
      <CartList
        items={items}
        removeItem={removeItem}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
      <p>Total: {formatCurrencyString({value: totalPrice, currency: 'USD'})}</p>
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

export default Cart
