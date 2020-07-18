import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {formatCurrencyString} from 'use-shopping-cart'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const Price = ({price, cartDetails, handleAddItem, decrementItem, product}) => {
  const [mods, setMods] = useState([])
  const [loading, setLoading] = useState(false)

  const itemPrice = price[0].modifiers
  const modArray = Object.keys(itemPrice)

  const handleClick = e => {
    const isAdd = e.target.checked
    if (isAdd) {
      setMods([...mods, e.target.value])
    } else {
      const newMods = mods.filter(item => item !== e.target.value)
      setMods(newMods)
    }
  }

  const getTotal = (arr, initial) => {
    return arr.reduce((tot, curr) => tot + itemPrice[curr], parseInt(initial))
  }

  return (
    <>
      {modArray.map(mod => (
        <div key={mod}>
          <input
            type="checkbox"
            name={mod}
            value={mod}
            onChange={e => handleClick(e)}
            className="mod-selection"
          />
          <label htmlFor={mod}>{mod}</label>
        </div>
      ))}
      <h5>{getTotal(mods, price[0].unit_amount)}</h5>
      <button
        onClick={() => {
          const modSelection = document.querySelectorAll('.mod-selection')
          modSelection.forEach(el => (el.checked = false))
          handleAddItem(
            {
              name: product.name,
              description: product.description,
              sku: `item${Date.now()}`,
              price: getTotal(mods, price[0].unit_amount),
              currency: price.currency,
              mods,
            },
            cartDetails[price.uid],
          )
        }}
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
