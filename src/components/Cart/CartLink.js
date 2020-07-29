import React from 'react'
import {useShoppingCart} from 'use-shopping-cart'
import {Link} from 'gatsby'
import {cartLinkStyles} from './CartLink-styles'

export const PureCartLink = ({cartCount}) => {
  return (
    <div css={cartLinkStyles}>
      <Link to="/cart" className={cartCount > 0 ? '' : 'disabled'}>
        {cartCount} Items in Order
      </Link>
    </div>
  )
}

export const CartLink = props => {
  const {cartCount} = useShoppingCart()
  return <PureCartLink {...props} cartCount={cartCount}></PureCartLink>
}

export default CartLink
