import React, {useState} from 'react'
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js'

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

  function onChange(e) {
    // set the key = to the name property equal to the value typed
    const updateItem = (data[e.target.name] = e.target.value)
    // update the state data object
    setData({...data, updateItem})
  }

  return (
    <>
      <h5>Total: {totalPrice}</h5>

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

      <CardSection
        data={data}
        stripeError={null}
        submitOrder={() => console.log('order submitted')}
      />
    </>
  )
}

export default CheckoutForm
