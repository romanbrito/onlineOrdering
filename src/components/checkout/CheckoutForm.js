import React, {useState} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'
import {formatCurrencyString} from 'use-shopping-cart'

import CardSection from './CardSection'

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
    console.log('token', token)
    console.log('data', data)
    // todo: move url address to environment var
    const userToken =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNTk1MTk1MTI3LCJleHAiOjE1OTc3ODcxMjd9.58-3Hj7MbcKyn8wstnlo9fxa4SVA1iXmKJ6uwjldghU'

    const response = await fetch('http://localhost:1337/orders', {
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
