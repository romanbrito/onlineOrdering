import React from 'react'

const CartList = ({items}) => (
  <>
    {items &&
      items.map(item => (
        <div key={item.sku}>
          {item.quantity} {item.name} {item.formattedValue}
          {item.mods.map(mod => ` ${mod}`)}
        </div>
      ))}
  </>
)

export default CartList
