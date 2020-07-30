import React from 'react'
import {formatCurrencyString} from 'use-shopping-cart'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const CartList = ({
  items,
  removeItem,
  incrementItem,
  decrementItem,
  totalPrice,
  cartCount,
}) => {
  return items && items.length ? (
    <>
      <p>Number of Items: {cartCount}</p>
      {items.map(item => (
        <div key={item.sku}>
          <div>
            <button
              disabled={item.quantity < 2}
              onClick={() => decrementItem(item.sku)}
            >
              <AiOutlineMinusCircle />
            </button>
            {item.quantity}
            <button onClick={() => incrementItem(item.sku)}>
              <AiOutlinePlusCircle />
            </button>
            {item.name} {item.mods.map(mod => ` ${mod}`)} {item.formattedValue}
            <button onClick={() => removeItem(item.sku)}>Remove</button>
          </div>
        </div>
      ))}
      <p>Total: {formatCurrencyString({value: totalPrice, currency: 'USD'})}</p>
    </>
  ) : (
    <div>No Items</div>
  )
}

export default CartList
