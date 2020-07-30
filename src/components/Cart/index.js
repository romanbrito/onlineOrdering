import React from 'react'
import {useShoppingCart} from 'use-shopping-cart'
import CartList from './CartList'
import CartControls from './CartControls'

const Cart = () => {
  const {
    totalPrice,
    cartCount,
    clearCart,
    cartDetails,
    removeItem,
    incrementItem,
    decrementItem,
  } = useShoppingCart()

  const items = Object.values(cartDetails)

  return (
    <>
      <CartList
        cartCount={cartCount}
        items={items}
        totalPrice={totalPrice}
        removeItem={removeItem}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
      />
      <CartControls cartCount={cartCount} clearCart={clearCart} />
    </>
  )
}

export default Cart
