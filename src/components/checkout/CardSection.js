import React from 'react'
import {CardElement} from '@stripe/react-stripe-js'

const CardSection = props => {
  return (
    <div>
      <label htmlFor="card-element">Credit or debit card</label>

      <div>
        <fieldset style={{border: 'none '}}>
          <div id="card-element">
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}
            />
          </div>
          <br />
          <div className="order-button-wrapper">
            <button onClick={props.submitOrder}>Confirm order</button>
          </div>
          {props.stripeError ? <div>{props.stripeError.toString()}</div> : null}
          <div id="card-errors" role="alert" />
        </fieldset>
      </div>
    </div>
  )
}

export default CardSection
