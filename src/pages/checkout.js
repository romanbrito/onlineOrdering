import React from 'react'
import useAuthState from '../hooks/useAuthState'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {useShoppingCart} from 'use-shopping-cart'
import InjectedCheckoutForm from '../components/checkout/CheckoutForm'
import ClosePage from '../components/ClosePage'

const Checkout = () => {
  const {user} = useAuthState()
  const {totalPrice} = useShoppingCart()

  console.log('checkout total price', totalPrice)
  // load stripe to inject into elements components
  const stripePromise = loadStripe('pk_test_tccKylDhwDhT44s6rtpyJFfL')
  return user ? (
    <Elements stripe={stripePromise}>
      <ClosePage />
      <InjectedCheckoutForm totalPrice={totalPrice} />
    </Elements>
  ) : (
    <div>Login Please</div>
  )
}

export default Checkout
