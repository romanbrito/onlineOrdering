import React from 'react'
import PropTypes from 'prop-types'
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from 'react-icons/ai'

const Price = ({price, cartDetails, addItem, product}) => {
  console.log(cartDetails)
  return (
    <>
      {price.map(price => (
        <div key={price.uid}>
          <div>{price.description}</div>
          <div>{price.uid}</div>
          <div>{price.unit_amount}</div>
          <button>
            <AiOutlineMinusCircle />
          </button>
          {cartDetails['price_1GyjWXFSqkM4etTHclT9U5l5'].quantity}
          <button
            onClick={() =>
              addItem({
                name: product.name,
                description: price.description,
                sku: price.uid,
                price: price.unit_amount,
                currency: price.currency,
              })
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

Q
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
