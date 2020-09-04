import React, {useState} from 'react'
import useAuthState from '../hooks/useAuthState'
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
  const {totalPrice, clearCart} = useShoppingCart()

  return user ? (
    <>
      <ClosePage />
      <InjectedCheckoutForm totalPrice={totalPrice} clearCart={clearCart} />
    </>
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
