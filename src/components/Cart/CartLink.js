import React from 'react'
import {useShoppingCart} from 'use-shopping-cart'
import {Link} from 'gatsby'
import {cartLinkStyles} from './CartLink-styles'

const CartLink = () => {
  const {cartCount} = useShoppingCart()

  return (
    <div css={cartLinkStyles}>
      <Link to="/cart">{cartCount} Items in Order</Link>
    </div>
  )
}

export default CartLink
