import React from 'react'
import PropTypes from 'prop-types'
import {formatCurrencyString} from 'use-shopping-cart'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const Price = ({price, cartDetails, handleAddItem, decrementItem, product}) => {
  return (
    <>
      {price.map(price => (
        <div key={price.uid}>
          <div>{price.description}</div>
          <div>
            {formatCurrencyString({
              value: price.unit_amount,
              currency: price.currency,
            })}
          </div>
          <button
            disabled={!cartDetails[price.uid]}
            onClick={() => decrementItem(price.uid)}
          >
            <AiOutlineMinusCircle />
          </button>
          {cartDetails[price.uid] ? cartDetails[price.uid].quantity : 0}
          <button
            onClick={() =>
              handleAddItem(
                {
                  name: product.name,
                  description: price.description,
                  sku: price.uid,
                  price: price.unit_amount,
                  currency: price.currency,
                },
                cartDetails[price.uid],
              )
            }
          >
            <AiOutlinePlusCircle />
          </button>
        </div>
      ))}
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
