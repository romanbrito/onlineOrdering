import React from 'react'
import {useShoppingCart} from 'use-shopping-cart'
import {Link} from 'gatsby'

const CartLink = () => {
  const {cartCount} = useShoppingCart()

  return (
    <div>
      <Link to="/cart">{cartCount} Items in Order</Link>
    </div>
  )
}

export default CartLink
