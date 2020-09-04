import React from 'react'
import {formatCurrencyString} from 'use-shopping-cart'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'
import {Items, Quantity} from './CartList-styles'

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
          <Items>
            <div className="controls">
              <Quantity
                disabled={item.quantity < 2}
                onClick={() => decrementItem(item.sku)}
              >
                <AiOutlineMinus />
              </Quantity>
              <Quantity>{item.quantity}</Quantity>
              <Quantity onClick={() => incrementItem(item.sku)}>
                <AiOutlinePlus />
              </Quantity>
            </div>
            <div className="detail">
              {item.name} {item.mods.map(mod => ` ${mod}`)}{' '}
              {item.formattedValue}
            </div>

            <Quantity onClick={() => removeItem(item.sku)}>Remove</Quantity>
          </Items>
        </div>
      ))}
      <p>Total: {formatCurrencyString({value: totalPrice, currency: 'USD'})}</p>
    </>
  ) : (
    <div>No Items</div>
  )
}

export default CartList
