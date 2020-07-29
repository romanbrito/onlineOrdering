import React, {useState} from 'react'
import Cookies from 'js-cookie'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {formatCurrencyString} from 'use-shopping-cart'

import CardSection from './CardSection'

const API_URL = process.env.API_URL || 'http://localhost:1337'

const CheckoutForm = ({totalPrice}) => {
  const [data, setData] = useState({
    nameOnCard: '',
    address: '',
    city: '',
    state: '',
    stripe_id: '',
  })

  const [error, setError] = useState('')

  const stripe = useStripe()
  const elements = useElements()

  const formattedPrice = formatCurrencyString({
    value: totalPrice,
    currency: 'USD',
  })

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value)
    // update the state data object
    setData({...data, updateItem})
  }

  const submitOrder = async () => {
    const cardElement = elements.getElement(CardElement)
    const token = await stripe.createToken(cardElement)
    const userToken = Cookies.get('token')
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        amount: totalPrice,
        address: data.address,
        city: data.city,
        state: data.state,
        token: token.token.id,
      }),
    })
    // todo: remove console.log
    console.log('response', response)
    if (!response.ok) {
      setError(response.statusText)
    }
  }

  return (
    <>
      <h5>Total: {formattedPrice}</h5>

      <h5>Your information:</h5>
      <hr />
      <div style={{flex: '0.90', marginRight: 10}}>
        name on card
        <input name="nameOnCard" onChange={onChange} />
      </div>
      <div style={{flex: '0.90', marginRight: 10}}>
        address
        <input name="address" onChange={onChange} />
      </div>

      <div style={{flex: '0.65', marginRight: '6%'}}>
        city
        <input name="city" onChange={onChange} />
      </div>
      <div style={{flex: '0.25', marginRight: 0}}>
        state
        <input name="state" onChange={onChange} />
      </div>

      <CardSection data={data} stripeError={error} submitOrder={submitOrder} />
    </>
  )
}

export default CheckoutForm
