import React from 'react'
import {loadStripe} from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)

const redirectToCheckout = async event => {
  event.preventDefault()
  const stripe = await stripePromise
  const {error} = await stripe.redirectToCheckout({
    lineItems: [
      {price: 'price_HL8k4OzmMCepIk', quantity: 1},
      {price: 'price_HLQ98IkhiUTLhu', quantity: 1},
    ],
    mode: 'payment',
    // Do not rely on the redirect to the successUrl for fulfilling
    // purchases, customers may not always reach the success_url after
    // a successful payment.
    // Instead use one of the strategies described in
    // https://stripe.com/docs/payments/checkout/fulfillment
    successUrl: `${window.location.origin}/page-2/`,
    cancelUrl: `${window.location.origin}/`,
  })

  if (error) {
    console.warn('Error:', error)
  }
}
const Checkout = () => {
  return <button onClick={redirectToCheckout}>BUY MY BOOK</button>
}

export default Checkout
