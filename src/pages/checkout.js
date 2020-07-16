import React from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {useShoppingCart, formatCurrencyString} from 'use-shopping-cart'
import InjectedCheckoutForm from '../components/checkout/CheckoutForm'
import ClosePage from '../components/ClosePage'

const Checkout = () => {
  const {totalPrice} = useShoppingCart()
  const formattedPrice = formatCurrencyString({
    value: totalPrice,
    currency: 'USD',
  })

  console.log('checkout total price', totalPrice)
  // load stripe to inject into elements components
  const stripePromise = loadStripe('pk_test_tccKylDhwDhT44s6rtpyJFfL')
  return (
    <Elements stripe={stripePromise}>
      <ClosePage />
      <InjectedCheckoutForm totalPrice={formattedPrice} />
    </Elements>
  )
}

export default Checkout
