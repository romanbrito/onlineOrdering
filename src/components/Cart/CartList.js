import React from 'react'

const CartList = ({items}) => (
  <>
    {items &&
      items.map(item => (
        <div key={item.sku}>
          {item.quantity} {item.name} {item.formattedValue}
        </div>
      ))}
  </>
)

export default CartList
