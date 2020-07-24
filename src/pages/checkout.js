import React, {useState} from 'react'
import useAuthState from '../hooks/useAuthState'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'
import {useShoppingCart} from 'use-shopping-cart'
import InjectedCheckoutForm from '../components/checkout/CheckoutForm'
import ClosePage from '../components/ClosePage'
import LoginForm from '../components/Forms/LoginForm'
import SignUpForm from '../components/Forms/SignUpForm'

const Checkout = () => {
  const {
    state: {user},
  } = useAuthState()
  const [signIn, setSignIn] = useState(false)
  const {totalPrice} = useShoppingCart()

  console.log('checkout total price', totalPrice)
  // load stripe to inject into elements components
  const stripePromise = loadStripe(process.env.STRIPE_PUBLISHABLE_KEY)
  return user ? (
    <Elements stripe={stripePromise}>
      <ClosePage />
      <InjectedCheckoutForm totalPrice={totalPrice} />
    </Elements>
  ) : (
    <div>
      <button onClick={() => setSignIn(!signIn)}>
        {signIn ? 'Need to sign up?' : 'Already have an account? Sign In'}
      </button>
      {signIn ? <LoginForm signIn={signIn} /> : <SignUpForm signIn={signIn} />}
    </div>
  )
}

export default Checkout
