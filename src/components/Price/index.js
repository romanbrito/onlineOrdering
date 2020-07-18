import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {formatCurrencyString} from 'use-shopping-cart'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const Price = ({price, cartDetails, handleAddItem, decrementItem, product}) => {
  const [mods, setMods] = useState({})
  const itemPrice = price[0].modifiers
  const modArray = Object.keys(itemPrice)

  const handleClick = e => {
    console.log(e.target.value)
    // set state
  }

  return (
    <>
      {modArray.map(mod => (
        <div key={mod}>
          <input
            type="checkbox"
            name={mod}
            value={itemPrice[mod]}
            onChange={e => handleClick(e)}
          />
          <label htmlFor={mod}>{mod}</label>
        </div>
      ))}

      <button
        onClick={() =>
          handleAddItem(
            {
              name: product.name,
              description: price.description,
              sku: price.uid,
              price: price.unit_amount,
              currency: price.currency,
              metadata: {product: product.name, modifiers: [{large: 200}]},
            },
            cartDetails[price.uid],
          )
        }
      >
        <AiOutlinePlusCircle /> Add Item
      </button>
    </>
  )
}

Price.propTypes = {
  price: PropTypes.array,
  cartDetails: PropTypes.object,
  addItem: PropTypes.func,
  product: PropTypes.object,
}

export default Price

/* <div>

<button
  onClick={() =>
    addItem({
      name: product.name,
      description,
      sku: 'price_HL8k4OzmMCepIk',
      price: 400,
      currency: 'USD',
      image: `http://localhost:1337${images[0].formats.thumbnail.url}`,
    })
  }
>
  <AiOutlinePlusCircle />
</button>
</div>  */
