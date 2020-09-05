import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {formatCurrencyString} from 'use-shopping-cart'
import Checkbox from '../Checkbox'
import ProductControls from '../ProductControls'
import {PriceContainer} from './styles'

const Price = ({price, cartDetails, handleAddItem, decrementItem, product}) => {
  const [mods, setMods] = useState([])
  const [loading, setLoading] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const itemPrice = JSON.parse(price.modifiers.product_modifiers)
  const modArray = Object.keys(itemPrice)

  const handleMod = e => {
    const isAdd = e.target.checked
    if (isAdd) {
      setMods([...mods, e.target.value].sort())
    } else {
      const newMods = mods.filter(item => item !== e.target.value)
      setMods(newMods.sort())
    }
  }

  const getTotal = (arr, initial) => {
    return arr.reduce((tot, curr) => tot + itemPrice[curr], parseInt(initial))
  }

  const addItem = () => {
    setLoading(true)
    const modSelection = document.querySelectorAll('.mod-selection')
    modSelection.forEach(el => (el.checked = false))
    const sku = `${product.name}${mods.length ? '_' : ''}${mods.join('_')}`
    handleAddItem(
      {
        name: product.name,
        description: product.description,
        sku,
        price: getTotal(mods, price.unit_amount),
        currency: price.currency,
        mods,
        uid: price.uid,
      },
      cartDetails[sku],
      quantity,
    )
    setMods([])
    setQuantity(1)
    setTimeout(() => setLoading(false), 300)
  }

  return (
    <PriceContainer>
      {modArray.map(mod => (
        <Checkbox key={mod} mod={mod} handleMod={handleMod} />
      ))}
      <h5>
        {formatCurrencyString({
          value: getTotal(mods, price.unit_amount),
          currency: 'USD',
        })}
      </h5>
      <ProductControls
        quantity={quantity}
        setQuantity={setQuantity}
        addItem={addItem}
        loading={loading}
      />
    </PriceContainer>
  )
}

Price.propTypes = {
  price: PropTypes.object,
  cartDetails: PropTypes.object,
  addItem: PropTypes.func,
  product: PropTypes.object,
}

export default Price
